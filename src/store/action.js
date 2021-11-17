import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOGOUT: 'user/logout',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  REDIRECT_TO_ROUTE: 'page/redirectToRoute',
  LOAD_USER_DATA: 'user/login',
};

export const loadUserData = createAction(
  ActionType.LOAD_USER_DATA,
  (userData) => ({
    payload: userData,
  }),
);

export const loadNearby = createAction(
  ActionType.LOAD_NEARBY,
  (nearPlases) => ({
    payload: nearPlases,
  }),
);

export const requireAuthorization = createAction(
  ActionType.REQUIRED_AUTHORIZATION,
  (status) => ({
    payload: status,
  }),
);

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({
    payload: url,
  }),
);

