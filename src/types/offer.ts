export type Offer = Readonly<{
  id: string;
  rate: number;
  name: string;
  price: number;
  premium: boolean;
}>;
