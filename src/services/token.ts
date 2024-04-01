const AUTH_TOKEN_KEY_NAME = 'token';

export type Token = string;

export const getToken = (): null | Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);

  return token;
};

export const setToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const clearToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
