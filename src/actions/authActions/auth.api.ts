import { TTheme, TUserProfile } from 'src/reducers/redux';
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

  fetchProfile = async (cookie?: string): Promise<TUserProfile> => {
    const headers = cookie ? { Cookie: cookie } : {};

    const user = await this.get(`/auth/user`, {
      headers,
    });
    return toCamelCase(user.data) as TUserProfile;
  };

  fetchTheme = async (cookie?: string): Promise<TTheme> => {
    const headers = cookie ? { Cookie: cookie } : {};

    const theme = await this.get(
      `https://mario.ya-praktikum.tech:4444/api/v1/themes/current`,
      {
        headers,
      },
    );
    return theme.data.data as TTheme;
  };

  logout = () => this.post(`/auth/logout`);

  getServiceYandex = async (): Promise<AxiosResponse<string>> => {
    const { data } = await this.get(`/oauth/yandex/service-id`);

    return data.service_id;
  };

  fetchYandexCode = (code: string) => this.post(`/oauth/yandex`, { code });
}

export default new AuthApiService();
