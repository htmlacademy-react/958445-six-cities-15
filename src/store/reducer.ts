import { createReducer } from '@reduxjs/toolkit';

import { State } from '../types';
import {
  login,
  logout,
  setCity,
  checkAuth,
  loadOffers,
  setDataLoadingStatus,
} from './action';
import { AuthorizationStatusesEnum, CITIES } from '../consts';

const initialState: State = {
  offers: [],
  reviews: [],
  city: CITIES[0],
  curentUser: null,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatusesEnum.UNKNOWN,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(checkAuth, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(login, (state, action) => {
    state.curentUser = action.payload.user;
    state.authorizationStatus = action.payload.authorizationStatus;
  });
  builder.addCase(logout, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setDataLoadingStatus, (state, action) => {
    state.isDataLoading = action.payload;
  });
});
