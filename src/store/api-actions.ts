import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { clearToken, setToken } from '../services/token';
import { AppDispatch, Offer, State, User } from '../types';
import { ApiRoutesEnum, AuthorizationStatusesEnum } from '../consts';
import {
  login,
  logout,
  loadOffers,
  checkAuth,
  setDataLoadingStatus,
} from './action';

type AuthData = {
  login: string;
  password: string;
};

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  api
    .get(ApiRoutesEnum.LOGIN)
    .then(() => dispatch(checkAuth(AuthorizationStatusesEnum.AUTH)))
    .catch(() => dispatch(checkAuth(AuthorizationStatusesEnum.NO_AUTH)));
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', ({ login: email, password }, { dispatch, extra: api }) => {
  api
    .post<User>(ApiRoutesEnum.LOGIN, {
      email,
      password,
    })
    .then(({ data }) => {
      setToken(data.token);

      dispatch(
        login({
          user: data,
          authorizationStatus: AuthorizationStatusesEnum.AUTH,
        })
      );
    });
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(ApiRoutesEnum.LOGOUT);
  clearToken();
  dispatch(logout(AuthorizationStatusesEnum.NO_AUTH));
});

export const loadOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/loadOffers', (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  api
    .get<Offer[]>(ApiRoutesEnum.OFFERS)
    .then(({ data }) => {
      dispatch(loadOffers(data));
    })
    .finally(() => dispatch(setDataLoadingStatus(false)));
});
