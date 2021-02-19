function isRetryable({ status }: { status: number }): boolean {
  return status !== undefined && status >= 400 && status < 600 && status !== 410;
}
export async function withRetry<T>(promiseFn: () => Promise<T>, label: string = '', attempts: number = 3): Promise<T> {
  let lastError = null;
  for (let i = 0; i < attempts; i++) {
    try {
      const result = await promiseFn();
      console.log(`Retrying. Attempt ${i} ${label}`);
      return result;
    } catch (err) {
      if (!isRetryable(err)) {
        throw err;
      }
      lastError = err;
    }
  }
  throw lastError;
}
