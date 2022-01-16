import { AccountList } from '@components/AccountList';
import { CreditCardList } from '@components/CreditCardList';

import { Account, CreditCard } from '../../types';

interface Props {
  accounts: Account[];
  creditCards: CreditCard[];
  onRequestOpenAccountModal: () => void;
  onRequestOpenCreditCardModal: () => void;
}

const DashboardPage: React.VFC<Props> = ({
  accounts,
  creditCards,
  onRequestOpenAccountModal,
  onRequestOpenCreditCardModal,
}) => {
  return (
    <div className='h-full bg-moma-20 grid grid-flow-col grid-col-2 gap-4 p-4'>
      <AccountList accounts={accounts} onRequestOpenAccountModal={onRequestOpenAccountModal} />
      <CreditCardList creditCards={creditCards} onRequestOpenCreditCardModal={onRequestOpenCreditCardModal} />
    </div>
  );
};

export { DashboardPage };
