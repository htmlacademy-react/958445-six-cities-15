import { createReducer } from '@reduxjs/toolkit';

import { State } from '../types';
import { CITIES } from '../mocks';
import { setCity, setOffers } from './action';

const initialState: State = {
  offers: [],
  reviews: [],
  city: CITIES[0],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(setOffers, (state, action) => {
    state.offers = action.payload;
  });
});
