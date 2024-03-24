import { createAction } from '@reduxjs/toolkit';

import type { City, Offer } from '../types';

export const setCity = createAction<City>('city/setCity');
export const setOffers = createAction<Offer[]>('offers/setOffers');
