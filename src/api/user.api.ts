import { ApiService } from 'src/services/api.service';

class UserApiService extends ApiService {
  changeAvatar = (data: FormData) => this.put('/user/profile/avatar', data);
}

export default new UserApiService();
