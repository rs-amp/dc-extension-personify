import { Criteria } from '../components/ManagedCriteria';
import ResponseError from '../models/ResponseError';
import { stripTrailingSlash } from '../utils/stripTrailingSlash';

export async function fetchMissionData(apiUrl: string | undefined, { tags = [], missions = [] }: Criteria) {
  if (!apiUrl) {
    throw new Error('Personify API required to be set in `apiUrl` installation parameter');
  }

  const response: Response = await fetch(`${stripTrailingSlash(apiUrl)}/missiondata`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tags, missions }),
  });

  const data = await response.json();
  if (response.ok) {
    const { tags, missions } = data;
    if (!missions || !tags) {
      throw new Error(`Personify API response missing data: ${JSON.stringify({ tags, missions })}`);
    }
    return data;
  }
  throw new ResponseError(response.status, data);
}
