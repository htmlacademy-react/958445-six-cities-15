import type { ShortUserType } from './user';
import type { City, Location } from './city';

export type ShortOfferType = Readonly<{
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

export type FullOfferType = ShortOfferType &
  Readonly<{
    goods: string[];
    bedrooms: number;
    images: string[];
    maxAdults: number;
    host: ShortUserType;
    description: string;
  }>;
