/* eslint-disable @typescript-eslint/no-empty-function */
import { AccountList } from '@components/AccountList';
import { CreditCardList } from '@components/CreditCardList';
import { MainLayout } from '@components/MainLayout';
import { Navigation } from '@components/Navigation';

import { Account, CreditCard } from '../../types';

interface Props {
  accounts: Account[];
  creditCards: CreditCard[];
  onRequestLogin: () => void;
  onRequestLogout: () => void;
  onRequestAddAccount: () => void;
  onRequestAddCreditCard: () => void;
}

const DashboardPage: React.VFC<Props> = ({
  accounts,
  creditCards,
  onRequestLogin,
  onRequestLogout,
  onRequestAddAccount,
  onRequestAddCreditCard,
}) => {
  return (
    <MainLayout>
      <Navigation activeUser={null} onRequestLogin={onRequestLogin} onRequestLogout={onRequestLogout} />
      <div className='h-full bg-moma-20 grid grid-flow-col grid-col-2 gap-4 p-4'>
        <AccountList accounts={accounts} onRequestAddAccount={onRequestAddAccount} />
        <CreditCardList creditCards={creditCards} onRequestAddCreditCard={onRequestAddCreditCard} />
      </div>
    </MainLayout>
  );
};

export { DashboardPage };
