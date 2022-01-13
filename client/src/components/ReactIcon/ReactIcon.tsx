import { RiMoneyCnyCircleFill } from 'react-icons/ri';

const iconTypes = ['money'] as const;
type Props = {
  iconType: typeof iconTypes[number];
  color?: string;
  size?: string | number;
};
const ReactIcon: React.VFC<Props> = ({ iconType, ...rest }) => {
  switch (iconType) {
    case 'money':
      return <RiMoneyCnyCircleFill {...rest} />;
    default:
      return null;
  }
};

export { ReactIcon };
