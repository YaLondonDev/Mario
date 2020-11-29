const host = 'https://ya-praktikum.tech';

type TSignin = {
  login: string;
  password: string;
}

type TSignup = {
  // eslint-disable-next-line camelcase
  first_name: string;
  // eslint-disable-next-line camelcase
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

// login: 'Mario1',
// password: '1234'
export const signin = ({ login, password }: TSignin): Promise<any> => fetch(`${host}/api/v2/auth/signin`, {
  method: 'POST',
  credentials: 'include',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    login, password,
  }),
});

export const signup = ({
  // eslint-disable-next-line camelcase
  first_name,
  // eslint-disable-next-line camelcase
  second_name,
  login,
  email,
  password,
  phone,
}: TSignup): Promise<any> =>
  fetch(`${host}/api/v2/auth/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      first_name,
      second_name,
      login,
      email,
      password,
      phone,
    }),
  });

export const getUserInfo = (): Promise<any> => fetch(`${host}/api/v2/auth/user`, {
  credentials: 'include',
  headers: {
    'content-type': 'application/json',
  },
});
