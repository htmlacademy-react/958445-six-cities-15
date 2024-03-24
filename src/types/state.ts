import { store } from '../store';
import { City, Offer, Review } from '.';

export type State = Readonly<{
  offers: Offer[];
  city: null | City;
  reviews: Review[];
}>;
export type AppDispatch = typeof store.dispatch;
