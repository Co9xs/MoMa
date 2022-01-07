import { Account } from '../../types';
import { AccountInfo } from '../Account';
import { Button } from '../Button';
import { ReactIcon } from '../ReactIcon';

interface Props {
  accounts: Account[];
}

export const AccountList: React.VFC<Props> = ({ accounts }) => {
  return (
    <div className='grid grid-flow-row grid-col-1 gap-6 auto-rows-min'>
      <div className='flex flex-row justify-between items-center'>
        <h2 className='text-3xl font-bold text-black-200'>銀行口座</h2>
        <Button icon={<ReactIcon iconType='add' />} text='追加' />
      </div>
      {accounts.map((account) => (
        <AccountInfo account={account} />
      ))}
    </div>
  );
};
