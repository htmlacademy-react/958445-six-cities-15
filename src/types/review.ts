export type Review = Readonly<{
  id: string;
  rate: number;
  date: string;
  text: string;
  avatar: string;
  username: string;
}>;
