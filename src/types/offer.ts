type Location = Readonly<{
  zoom: number;
  latitude: number;
  longitude: number;
}>;

export type Offer = Readonly<{
  id: string;
  type: string;
  title: string;
  price: number;
  rating: number;
  previewImage: string;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isPremium: boolean;
  isFavorite: boolean;
}>;
