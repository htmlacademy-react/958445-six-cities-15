import { City, Location } from './city';

export type Offer = Readonly<{
  id: string;
  city: City;
  type: string;
  title: string;
  price: number;
  rating: number;
  location: Location;
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
}>;
