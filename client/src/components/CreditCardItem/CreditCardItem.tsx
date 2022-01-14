import { CreditCard } from '../../types';

interface Props {
  creditCard: CreditCard;
}

const CreditCardItem: React.VFC<Props> = ({ creditCard }) => {
  return (
    <div className='p-3 shadow bg-moma-10'>
      <h3 className='text-xl text-moma-80 font-bold'>{creditCard.name}</h3>
      <div className='pt-2 px-2'>
        <p className='text-moma-70'>今月の予算</p>
        <p className='text-lg text-moma-80 font-bold'>{creditCard.budget.toLocaleString()}円</p>
      </div>
    </div>
  );
};

export { CreditCardItem };
