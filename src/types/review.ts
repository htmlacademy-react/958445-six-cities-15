export type Review = Readonly<{
  id: string;
  date: string;
  text: string;
  rating: number;
  avatar: string;
  username: string;
}>;
