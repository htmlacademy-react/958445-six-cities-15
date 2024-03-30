import { store } from '../store';
import { City, Offer, Review, User } from '.';
import { AuthorizationStatusesEnum } from '../consts';

export type State = Readonly<{
  city: City;
  offers: Offer[];
  reviews: Review[];
  isDataLoading: boolean;
  curentUser: null | User;
  authorizationStatus: AuthorizationStatusesEnum;
}>;
export type AppDispatch = typeof store.dispatch;
