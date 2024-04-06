import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiRoutesEnum } from '../consts';
import { clearToken, setToken } from '../services/token';
import type {
  State,
  AppDispatch,
  FullUserType,
  ShortOfferType,
} from '../types';

type AuthData = {
  login: string;
  password: string;
};

export const checkAuthAction = createAsyncThunk<
  FullUserType,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<FullUserType>(ApiRoutesEnum.LOGIN);

  return data;
});

export const loginAction = createAsyncThunk<
  FullUserType,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ login: email, password }, { extra: api }) => {
  const { data } = await api.post<FullUserType>(ApiRoutesEnum.LOGIN, {
    email,
    password,
  });

  setToken(data.token);

  return data;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(ApiRoutesEnum.LOGOUT);

  clearToken();
});

export const loadOffersAction = createAsyncThunk<
  ShortOfferType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/loadOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<ShortOfferType[]>(ApiRoutesEnum.OFFERS);

  return data;
});

export const setIsFavoriteAction = createAsyncThunk<
  ShortOfferType,
  { offerId: string; status: boolean },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('offers/addFavorite', async ({ offerId, status }, { extra: api }) => {
  const { data } = await api.post<ShortOfferType>(
    `${ApiRoutesEnum.FAVORITE}/${offerId}/${status ? 1 : 0}`
  );

  return data;
});

export const loadFavoritesAction = createAsyncThunk<
  ShortOfferType[],
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('offers/loadFavorites', async (_arg, { extra: api }) => {
  const { data } = await api.get<ShortOfferType[]>(ApiRoutesEnum.FAVORITE);

  return data;
});
