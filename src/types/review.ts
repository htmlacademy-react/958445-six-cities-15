import type { FullUserType } from './user';

export type Review = Readonly<{
  id: string;
  date: string;
  rating: number;
  comment: string;
  user: FullUserType;
}>;
