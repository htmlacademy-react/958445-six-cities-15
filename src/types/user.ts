export type ShortUserType = Readonly<{
  name: string;
  isPro: boolean;
  avatarUrl: string;
}>;

export type FullUserType = ShortUserType &
  Readonly<{
    token: string;
    email: string;
  }>;
