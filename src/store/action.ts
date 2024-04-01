import { createAction } from '@reduxjs/toolkit';

import { AuthorizationStatusesEnum } from '../consts';
import type { City, Error, Offer, User } from '../types';

export const setCity = createAction<City>('city/setCity');
export const addError = createAction<Error>('errors/addError');
export const loadOffers = createAction<Offer[]>('offers/loadOffers');
export const removeError = createAction<string>('errors/removeError');
export const logout = createAction<AuthorizationStatusesEnum>('user/logout');
export const checkAuth =
  createAction<AuthorizationStatusesEnum>('user/checkAuth');
export const login = createAction<{
  user: User;
  authorizationStatus: AuthorizationStatusesEnum;
}>('user/login');
export const setDataLoadingStatus = createAction<boolean>(
  'data/setDataLoadingStatus'
);
