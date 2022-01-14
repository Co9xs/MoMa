import { NavLink } from 'react-router-dom';

import { CreditCardItem } from '@components/CreditCardItem';
import { SectionHeader } from '@components/SectionHeader';

import { CreditCard } from '../../types';

interface Props {
  creditCards: CreditCard[];
  onRequestAddCreditCard: () => void;
}

const CreditCardList: React.VFC<Props> = ({ creditCards, onRequestAddCreditCard }) => {
  return (
    <div className='bg-moma-20 p-3'>
      <div className='pb-3'>
        <SectionHeader text='クレジットカード' onRequestAddItem={onRequestAddCreditCard} />
      </div>
      <div className='grid grid-flow-row grid-col-1 gap-6 auto-rows-min'>
        {creditCards.map((creditCard) => (
          <NavLink key={creditCard.id} to={`/credit_cards/${creditCard.id}/statements`}>
            <CreditCardItem creditCard={creditCard} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export { CreditCardList };
