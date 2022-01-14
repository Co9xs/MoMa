import { NavLink } from 'react-router-dom';

import { AccountItem } from '@components/AccountItem';
import { SectionHeader } from '@components/SectionHeader';

import { Account } from '../../types';

interface Props {
  accounts: Account[];
  onRequestAddAccount: () => void;
}

const AccountList: React.VFC<Props> = ({ accounts, onRequestAddAccount }) => {
  return (
    <div className='bg-moma-20 p-3'>
      <div className='pb-3'>
        <SectionHeader text='銀行口座' onRequestAddAccount={onRequestAddAccount} />
      </div>
      <div className='grid grid-flow-row grid-col-1 gap-6 auto-rows-min'>
        {accounts.map((account) => (
          <NavLink key={account.id} to={`/accounts/${account.id}/statements`}>
            <AccountItem account={account} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export { AccountList };
