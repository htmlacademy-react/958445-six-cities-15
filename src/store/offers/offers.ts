import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../consts';
import { loadOffersAction } from '../api-actions';
import type { ShortOfferType } from '../../types';

const initialState: {
  offers: ShortOfferType[];
  isOffersDataLoading: boolean;
} = {
  offers: [],
  isOffersDataLoading: false,
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(loadOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      });
  },
});
