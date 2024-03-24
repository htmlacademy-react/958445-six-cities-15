import { store } from '../store';
import { City, Offer, Review } from '.';

export type State = Readonly<{
  cities: City[];
  offers: Offer[];
  city: null | City;
  reviews: Review[];
}>;
export type AppDispatch = typeof store.dispatch;
