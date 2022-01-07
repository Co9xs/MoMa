export type User = Readonly<{
  id: number;
  auth0Id: string;
}>;

export type Account = Readonly<{
  id: number;
  name: string;
  balance: number;
  ownerId: number;
}>;
