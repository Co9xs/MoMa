import { fetcher } from '@utils/fetchers';

import { CreditCard, CreditCardPayload } from './type';

const getCreditCardList = async (accessToken: string): Promise<CreditCard[]> => {
  return fetcher<CreditCard[]>('/api/v1/credit_cards', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    mode: 'cors',
    credentials: 'include',
  });
};

const postNewCreditCard = async (accessToken: string, payload: CreditCardPayload): Promise<CreditCard> => {
  return fetcher<CreditCard>('/api/v1/credit_cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
    mode: 'cors',
    credentials: 'include',
  });
};

export { getCreditCardList, postNewCreditCard };
