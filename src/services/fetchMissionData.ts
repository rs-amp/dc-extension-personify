export async function fetchMissionData(missions: string[] = [], tags: string[] = []) {
  return fetch('https://fqpx7qvccb.execute-api.eu-west-1.amazonaws.com/dev/personalization/personify/missiondata', {
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
