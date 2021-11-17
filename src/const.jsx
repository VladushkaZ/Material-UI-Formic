export const AppRoute = {
  LOGIN: '/login',
  PAGE: '/page',
  ROOT: '/',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};
export const APIRoute = {
  PAGE: '/page',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;
