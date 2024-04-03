import { combineReducers } from '@reduxjs/toolkit';

import { city } from './city/city';
import { NameSpace } from '../consts';
import { user } from './user/user-data';
import { offers } from './offers/offers';

export const rootReducer = combineReducers({
  [NameSpace.City]: city.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Offers]: offers.reducer,
});
