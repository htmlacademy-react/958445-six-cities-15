import { createSelector } from '@reduxjs/toolkit';

import { getCity } from '../../store/city/selectors';
import { getOffers } from '../../store/offers/selectors';

export const getSelectedOffers = createSelector(
  [getOffers, getCity],
  (allOffers, city) => allOffers.filter((item) => item.city.name === city.name)
);

export function getCountWithNoun(count: number) {
  return `${count} ${count > 1 ? 'places' : 'place'}`;
}
