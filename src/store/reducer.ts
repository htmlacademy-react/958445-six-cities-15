import { createReducer } from '@reduxjs/toolkit';

import { setCity, setOffers } from './action';
import { CITIES, OFFERS, REVIEWS } from '../mocks';

const initialState = {
  offers: OFFERS,
  city: CITIES[0],
  reviews: REVIEWS,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(setOffers, (state, action) => {
    state.offers = action.payload;
  });
});
