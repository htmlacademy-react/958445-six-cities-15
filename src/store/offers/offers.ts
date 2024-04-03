import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../consts';
import type { ShortOfferType } from '../../types';
import {
  loadOffersAction,
  setIsFavoriteAction,
  loadFavoritesAction,
} from '../api-actions';

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
      .addCase(setIsFavoriteAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter(
            (item) => item.id !== action.payload.id
          );
        }
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

// export const { addFavorite } = offers.actions;
