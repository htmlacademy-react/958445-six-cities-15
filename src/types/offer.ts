export type Offer = Readonly<{
  id: string;
  lat: number;
  lng: number;
  rate: number;
  title: string;
  price: number;
  premium: boolean;
}>;
