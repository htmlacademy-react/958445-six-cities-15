import { createAction } from '@reduxjs/toolkit';

import type { City, Offer } from '../types';

export const setCity = createAction<{ city: City }>('city/setCity');
export const setOffers = createAction<{ offers: Offer[] }>('offers/setOffers');
