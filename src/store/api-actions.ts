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
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.post<User>(ApiRoutesEnum.LOGIN, {
    password: 'password1',
    email: 'Oliver.conner@gmail.com',
  });

  setToken(data.token);

  dispatch(
    login({ user: data, authorizationStatus: AuthorizationStatusesEnum.AUTH })
  );
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
