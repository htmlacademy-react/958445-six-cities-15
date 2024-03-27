import { store } from '../store';
import { City, Offer, Review } from '.';

export type State = Readonly<{
  city: City;
  offers: Offer[];
  reviews: Review[];
}>;
export type AppDispatch = typeof store.dispatch;
