import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../consts';
import type { ShortOfferType } from '../../types';
import { loadFavoritesAction, loadOffersAction } from '../api-actions';

const initialState: {
  offers: ShortOfferType[];
  favorites: ShortOfferType[];
  isOffersDataLoading: boolean;
} = {
  offers: [],
  favorites: [],
  isOffersDataLoading: false,
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(loadOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(loadOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      });
  },
});
