import { AccountItem } from '@components/AccountItem';
import { SectionHeader } from '@components/SectionHeader';

import { Account } from '../../types';

interface Props {
  accounts: Account[];
}

const AccountList: React.VFC<Props> = ({ accounts }) => {
  return (
    <div className="bg-moma-20 p-3">
      <div className='pb-3'>
        <SectionHeader text='銀行口座' />
      </div>
      <div className='grid grid-flow-row grid-col-1 gap-6 auto-rows-min'>
        {accounts.map((account) => (
          <AccountItem account={account} />
        ))}
      </div>
    </div>
  );
};

export { AccountList };
