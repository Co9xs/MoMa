import { NavLink } from 'react-router-dom';

import { AccountItem } from '@components/AccountItem';
import { SectionHeader } from '@components/SectionHeader';

import { Account } from '../../types';

interface Props {
  accounts: Account[];
  onRequestOpenAccountModal: () => void;
}

const AccountList: React.VFC<Props> = ({ accounts, onRequestOpenAccountModal }) => {
  return (
    <div className='bg-moma-20 p-3'>
      <div className='pb-3'>
        <SectionHeader text='銀行口座' onRequestOpenModal={onRequestOpenAccountModal} />
      </div>
      <div className='grid grid-flow-row grid-col-1 gap-6 auto-rows-min'>
        {accounts
          ? accounts.map((account) => (
              <NavLink key={account.id} to={`/accounts/${account.id}/statements`}>
                <AccountItem account={account} />
              </NavLink>
            ))
          : null}
      </div>
    </div>
  );
};

export { AccountList };
