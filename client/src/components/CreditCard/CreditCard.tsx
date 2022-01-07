import { CreditCard } from '../../types';

interface Props {
  creditCard: CreditCard;
}

export const CreditCardInfo: React.VFC<Props> = ({ creditCard }) => {
  return (
    <div className='flex flex-col bg-white-100 shadow-inner rounded-lg p-4 cursor-pointer'>
      <h3 className='text-2xl text-black-200 font-bold'>{creditCard.name}</h3>
      <div className='px-2 py-3 border-b'>
        <p className='text-black-100'>今月の予算</p>
        <span className='text-xl text-black-200 font-bold'>{creditCard.budget.toLocaleString()}円</span>
      </div>
      <div className='px-2 pt-3'>
        <p className='text-black-100'>現時点での支出</p>
        <span className='text-xl text-black-200 font-bold'>{creditCard.budget}円</span>
      </div>
    </div>
  );
};
