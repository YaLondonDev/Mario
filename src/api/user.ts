const host = 'https://ya-praktikum.tech';

export const getUserById = (id: string | number):Promise<any> => fetch(`${host}/api/v2/user/${id}`, {
  method: 'GET',
  credentials: 'include',
  headers: {
    'content-type': 'application/json',
  },
});

export const changeAvatar = (avatar: any):Promise<any> => fetch(`${host}/api/v2/user/profile/avatar`, {
  method: 'PUT',
  credentials: 'include',
  body: avatar,
});

export const changePassword = (oldPassword: string, newPassword: string):Promise<any> => fetch(`${host}/api/v2/user/password`, {
  method: 'PUT',
  credentials: 'include',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    oldPassword,
    newPassword,
  }),
});
