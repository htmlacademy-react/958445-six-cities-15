export type User = Readonly<{
  name: string;
  token: string;
  email: string;
  isPro: boolean;
  avatarUrl: string;
}>;
