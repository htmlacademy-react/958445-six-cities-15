import { State } from '../types';

export const getCity = (state: State) => state.city;
export const getErrors = (state: State) => state.errors;
export const getOffers = (state: State) => state.offers;
export const getCurentUser = (state: State) => state.curentUser;
export const getIsLoading = (state: State) => state.isDataLoading;
export const getAuthorizationStatus = (state: State) =>
  state.authorizationStatus;
