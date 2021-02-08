import { ratingFieldName } from 'src/helpers/api';
import { ApiService } from 'src/services/api.service';

type TLeaderboard = {
    name: string,
    point: string
}

const getLeaderboardData = {
  ratingFieldName,
  cursor: 0,
  limit: 10,
};

export class LeaderboardApi extends ApiService {
    getLeaderboard = () => this.post(`/leaderboard/all`, getLeaderboardData);

    addToLeaderboard = (payload: TLeaderboard) => {
      const data = {
        name: payload.name,
        [ratingFieldName]: payload.point,
      };

      return this.post(`/leaderboard`, { ...data, ratingFieldName });
    }
}
