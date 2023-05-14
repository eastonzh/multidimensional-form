import type { IUserLoginParams } from './types';

export const login = async (userLoginInfo: IUserLoginParams) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // resolve({ data: userLoginInfo });
      resolve(null);
    }, 2000);
  });
};
