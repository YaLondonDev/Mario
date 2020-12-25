import { TUserProfile } from 'src/reducers/reducers.types';
import { ApiService } from 'src/services/api.service';
import { toCamelCase } from 'src/utils/toCamelCase';
import { toSnakeCase } from 'src/utils/toSnakeCase';

import { AxiosResponse } from 'axios';
import { TSignInPayload, TSignUpPayload } from './auth.types';

class AuthApiService extends ApiService {
  signUp = (signUpPayload: TSignUpPayload) =>
    this.post(`/auth/signup`, toSnakeCase(signUpPayload));

  signIn = (signInPayload: TSignInPayload) =>
    this.post(`/auth/signin`, toSnakeCase(signInPayload));

  fetchProfile = async (): Promise<TUserProfile> => {
    const user = await this.get(`/auth/user`);
    return toCamelCase(user.data) as TUserProfile;
  };

  logout = () => this.post(`/auth/logout`);

  getServiceYandex = async (): Promise<AxiosResponse<string>> => {
    const { data } = await this.get(`/oauth/yandex/service-id`);

    return data.service_id;
  };

  fetchYandexCode = (code: string) => this.post(`/oauth/yandex`, { code })
}

export default new AuthApiService();
