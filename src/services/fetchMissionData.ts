import { stripTrailingSlash } from '../utils/stripTrailingSlash';
export interface NetworkError extends Error {
  status?: number;
}

export async function fetchMissionData(apiUrl: string | undefined, missions: string[] = [], tags: string[] = []) {
  if (!apiUrl) {
    throw new Error('Personify API required to be set in `apiUrl` installation parameter');
  }
  return fetch(`${stripTrailingSlash(apiUrl)}/missiondata`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      missions,
      tags,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        const error: NetworkError = new Error('Unable to fetch mission data');
        error.status = response.status;
        throw error;
      }
      return response.json();
    })
    .then((response) => {
      if (!response.missions || !response.tags) {
        throw new Error(`Personify API response missing data: ${JSON.stringify(response)}`);
      }
      return response;
    });
}
