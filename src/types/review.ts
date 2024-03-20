import type { User } from './user';

export type Review = Readonly<{
  id: string;
  user: User;
  date: string;
  rating: number;
  comment: string;
}>;
