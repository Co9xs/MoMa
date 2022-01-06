import { AiOutlineAccountBook, AiOutlineHome, AiOutlineCreditCard, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { IoIosAddCircle } from 'react-icons/io';
import { GoSignIn } from 'react-icons/go';

const icons = ['home', 'account', 'creditCard', 'subscription', 'signin', 'user', 'add'] as const;

interface Props {
  iconType: typeof icons[number];
  color?: string;
  size?: string | number;
}

export const ReactIcon: React.VFC<Props> = ({ iconType, ...rest }) => {
  switch (iconType) {
    case 'home':
      return <AiOutlineHome {...rest} />;
    case 'account':
      return <AiOutlineAccountBook {...rest} />;
    case 'creditCard':
      return <AiOutlineCreditCard {...rest} />;
    case 'subscription':
      return <MdOutlineSubscriptions {...rest} />;
    case 'signin':
      return <GoSignIn {...rest} />;
    case 'user':
      return <AiOutlineUser {...rest} />;
    case 'add':
      return <IoIosAddCircle {...rest} />;
    default:
      return null;
  }
};
