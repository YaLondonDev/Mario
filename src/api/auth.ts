import { host, defaultRequestOptions } from 'src/helpers/api';

type TSignin = {
  login: string;
  password: string;
};

type TSignup = {
  'first_name': string;
  'second_name': string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export const signin = (data: TSignin): Promise<Response> =>
  fetch(`${host}/api/v2/auth/signin`, {
    ...defaultRequestOptions,
    method: 'POST',
    body: JSON.stringify(data),
  });

export const signup = (data: TSignup): Promise<Response> =>
  fetch(`${host}/api/v2/auth/signup`, {
    ...defaultRequestOptions,
    method: 'POST',
    body: JSON.stringify(data),
  });

export const getUserInfo = (): Promise<Response> =>
  fetch(`${host}/api/v2/auth/user`, defaultRequestOptions);
