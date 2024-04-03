import { NameSpace } from '../../consts';
import type { State } from '../../types';

export const getOffers = (state: State) => state[NameSpace.Offers].offers;
export const getIsOffersDataLoading = (state: State) =>
  state[NameSpace.Offers].isOffersDataLoading;
