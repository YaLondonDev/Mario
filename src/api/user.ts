import { host, defaultRequestOptions } from '../helpers/api';

export const getUserById = (id: string | number):Promise<Response> => fetch(`${host}/api/v2/user/${id}`, defaultRequestOptions);

export const changeAvatar = (avatar: any):Promise<Response> => fetch(`${host}/api/v2/user/profile/avatar`, {
  ...defaultRequestOptions,
  method: 'PUT',
  headers: {
    'content-type': 'multipart/form-data',
  },
  body: avatar,
});

export const changePassword = (oldPassword: string, newPassword: string):Promise<Response> => fetch(`${host}/api/v2/user/password`, {
  ...defaultRequestOptions,
  method: 'PUT',
  body: JSON.stringify({
    oldPassword,
    newPassword,
  }),
});
