import { stripTrailingSlash } from '../utils/stripTrailingSlash';

interface MissionDataParams {
  apiUrl: string;
  missions: string[];
  tags: string[];
}

export async function fetchMissionData({ apiUrl, missions = [], tags = [] }: MissionDataParams) {
  return fetch(`${stripTrailingSlash(apiUrl)}/personalization/personify/missiondata`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      missions,
      tags,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (!response.missions || !response.tags) {
        throw new Error(`Personify API response missing data: ${JSON.stringify(response)}`);
      }
      return response;
    });
}
