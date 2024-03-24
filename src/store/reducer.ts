import { createReducer } from '@reduxjs/toolkit';

import { loadCities, setCity, setOffers } from './action';
import { State } from '../types';

const initialState: State = {
  offers: [],
  city: null,
  cities: [],
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(setOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(loadCities, (state, action) => {
    state.cities = action.payload;
  });
});
