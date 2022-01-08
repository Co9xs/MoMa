import { Account } from '../../types';

interface Props {
  account: Account;
}

export const AccountInfo: React.VFC<Props> = ({ account }) => {
  return (
    <div className='flex flex-col bg-white-100 shadow-md rounded-lg p-4 cursor-pointer'>
      <h3 className='text-2xl text-black-200 font-bold'>{account.name}</h3>
      <div className='px-2 py-3 border-b'>
        <p className='text-black-100'>口座残高</p>
        <span className='text-xl text-black-200 font-bold'>{account.balance.toLocaleString()}円</span>
      </div>
      <div className='px-2 pt-3'>
        <p className='text-black-100'>今月末時点での口座残高目安</p>
        <span className='text-xl text-black-200 font-bold'>{account.balance.toLocaleString()}円</span>
      </div>
    </div>
  );
};
