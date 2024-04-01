import { store } from '../store';
import { City, Offer, User } from '.';
import { AuthorizationStatusesEnum } from '../consts';

export type State = Readonly<{
  city: City;
  offers: Offer[];
  isDataLoading: boolean;
  curentUser: null | User;
  errors: Record<string, string[]>;
  authorizationStatus: AuthorizationStatusesEnum;
}>;
export type AppDispatch = typeof store.dispatch;
