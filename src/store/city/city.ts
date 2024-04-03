import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { City } from '../../types';
import { CITIES, NameSpace } from '../../consts';

const initialState: { city: City } = {
  city: CITIES[0],
};

export const city = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = city.actions;
