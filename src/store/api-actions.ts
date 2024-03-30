import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, Offer, State, User } from '../types';
import { AxiosInstance } from 'axios';
import { ApiRoutesEnum, AuthorizationStatusesEnum } from '../consts';
import { login, logout, loadOffers, checkAuth } from './action';
import { clearToken, setToken } from '../services/token';

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(ApiRoutesEnum.LOGIN);
    dispatch(checkAuth(AuthorizationStatusesEnum.AUTH));
  } catch {
    dispatch(checkAuth(AuthorizationStatusesEnum.NO_AUTH));
  }
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
>('offers/loadOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(ApiRoutesEnum.OFFERS);

  dispatch(loadOffers(data));
});
