import { City } from '.';
import { store } from '../store';
import type { FullUserType } from './user';
import type { ShortOfferType } from './offer';
import { AuthorizationStatusesEnum } from '../consts';

export type State = Readonly<{
  city: City;
  isDataLoading: boolean;
  offers: ShortOfferType[];
  curentUser: null | FullUserType;
  errors: Record<string, string[]>;
  authorizationStatus: AuthorizationStatusesEnum;
}>;
export type AppDispatch = typeof store.dispatch;
