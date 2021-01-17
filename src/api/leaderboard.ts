import { host, defaultRequestOptions, ratingFieldName } from '../helpers/api';

const getLeaderboardData = {
  ratingFieldName,
  cursor: 0,
  limit: 10,
};

type TLeaderboard = {
  name: string,
  point: string
}

export const getLeaderboard = (): Promise<Response> => fetch(`${host}/api/v2/leaderboard/all`, {
  ...defaultRequestOptions,
  method: 'POST',
  credentials: 'include',
  body: JSON.stringify(getLeaderboardData),
});

export const addToLeaderboard = (result:TLeaderboard): Promise<Response> => {
  const data = {
    name: result.name,
    [ratingFieldName]: result.point,
  };
  return fetch(`${host}/api/v2/leaderboard`, {
    ...defaultRequestOptions,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(
      {
        data: {
          ...data,
        },
        ratingFieldName,
      },
    ),
  });
};
