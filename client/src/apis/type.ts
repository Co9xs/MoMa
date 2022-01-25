type User = Readonly<{
  id: number;
  auth0Id: string;
}>;

type Account = Readonly<{
  id: number;
  name: string;
  balance: number;
}>;

type CreditCard = Readonly<{
  id: number;
  name: string;
  budget: number;
}>;

export type { User, Account, CreditCard };
