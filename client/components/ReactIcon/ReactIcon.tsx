import { AiOutlineAccountBook, AiOutlineHome, AiOutlineCreditCard, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { GoSignIn } from 'react-icons/go';

const icons = ['home', 'account', 'creditCard', 'subscription', 'signin', 'user'] as const;

interface Props {
  iconType: typeof icons[number];
  color?: string;
  size?: string | number;
}

export const ReactIcon: React.VFC<Props> = ({ iconType, color, size }) => {
  switch (iconType) {
    case 'home':
      return <AiOutlineHome color={color} size={size} />;
    case 'account':
      return <AiOutlineAccountBook color={color} size={size} />;
    case 'creditCard':
      return <AiOutlineCreditCard color={color} size={size} />;
    case 'subscription':
      return <MdOutlineSubscriptions color={color} size={size} />;
    case 'signin':
      return <GoSignIn color={color} size={size} />;
    case 'user':
      return <AiOutlineUser color={color} size={size} />;
    default:
      return null;
  }
};
