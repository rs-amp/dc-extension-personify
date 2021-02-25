export default class ResponseError extends Error {
  public readonly name = 'RESPONSE_ERROR';

  constructor(
    public status: number,
    public data: Record<string, unknown>,
    public message: string = `Response error: ${status}`
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
