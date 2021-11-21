import { IS_BROWSER } from '../utils';

const TOKEN_NAME = '_ut';

export const saveToken = token =>
  IS_BROWSER && token ? localStorage.setItem(TOKEN_NAME, token) : null;
export const getToken = () =>
  IS_BROWSER ? localStorage.getItem(TOKEN_NAME) : null;
export const removeToken = () =>
  IS_BROWSER ? localStorage.removeItem(TOKEN_NAME) : null;
