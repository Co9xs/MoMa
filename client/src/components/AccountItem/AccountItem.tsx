import { Account } from '../../types';

interface Props {
  account: Account;
}

const AccountItem: React.VFC<Props> = ({ account }) => {
  return (
    <div className='p-3 shadow bg-moma-10 rounded-md'>
      <h3 className='text-xl text-moma-80 font-bold'>{account.name}</h3>
      <div className='pt-2 px-2'>
        <p className='text-moma-70'>口座残高</p>
        <p className='text-lg text-moma-80 font-bold'>{account.balance.toLocaleString()}円</p>
      </div>
    </div>
  );
};

export { AccountItem };
