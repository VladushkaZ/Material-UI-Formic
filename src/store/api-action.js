import {loadUserData, redirectToRoute, requireAuthorization, logout as closeSession } from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';


export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(loadUserData(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.PAGE)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(loadUserData(data));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
    .then(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);
