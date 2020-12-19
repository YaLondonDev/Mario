import { TUserProfile } from 'src/reducers/redux';
import { ApiService } from 'src/services/api.service';
import { toCamelCase } from 'src/utils/toCamelCase';
import { toSnakeCase } from 'src/utils/toSnakeCase';

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
}

export default new AuthApiService();
