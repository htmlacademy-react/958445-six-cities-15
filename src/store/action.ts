import { createAction } from '@reduxjs/toolkit';

import type { City, Offer, User } from '../types';
import { AuthorizationStatusesEnum } from '../consts';

export const setCity = createAction<City>('city/setCity');
export const loadOffers = createAction<Offer[]>('offers/loadOffers');
export const checkAuth =
  createAction<AuthorizationStatusesEnum>('user/checkAuth');
export const logout = createAction<AuthorizationStatusesEnum>('user/logout');
export const login = createAction<{
  user: User;
  authorizationStatus: AuthorizationStatusesEnum;
}>('user/login');
export const setDataLoadingStatus = createAction<boolean>(
  'data/setDataLoadingStatus'
);
