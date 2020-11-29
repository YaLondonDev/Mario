import { TUserProfile } from '../../reducers/auth.reducer';
import { ApiService } from '../../services/api.service';
import { toCamelCase } from '../../utils/toCamelCase';
import { toSnakeCase } from '../../utils/toSnakeCase';
import { TSignInPayload, TSignUpPayload } from './auth.types';

export class AuthApiService extends ApiService {
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
