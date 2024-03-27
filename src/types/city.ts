export type Location = Readonly<{
  zoom: number;
  latitude: number;
  longitude: number;
}>;

export type City = Readonly<{
  name: string;
  location: Location;
}>;
