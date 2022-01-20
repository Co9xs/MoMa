import { useQuery } from 'react-query';

import { DashboardPage } from '@pages/DashboardPage';

import { getAccountList } from '@utils/fetchers';

const _accounts = [
  {
    id: 1,
    name: '楽天銀行',
    balance: 165040,
  },
  {
    id: 2,
    name: 'ゆうちょ銀行',
    balance: 21040,
  },
];

const _creditCards = [
  {
    id: 1,
    name: '楽天カード',
    budget: 50000,
  },
  {
    id: 2,
    name: '三井住友カード',
    budget: 20000,
  },
];

const DashboardPageContainer: React.VFC = () => {
  const { data: accounts, isLoading } = useQuery(['accounts'], getAccountList, { useErrorBoundary: true });

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <DashboardPage
      accounts={accounts}
      creditCards={_creditCards}
      onRequestOpenAccountModal={() => {}}
      onRequestOpenCreditCardModal={() => {}}
    />
  );
};

export { DashboardPageContainer };
