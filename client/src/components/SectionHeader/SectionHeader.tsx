import { Button } from '@components/Button';
import { ReactIcon } from '@components/ReactIcon';

interface HeadingProps {
  text: string;
}

const Heading: React.VFC<HeadingProps> = ({ text }) => {
  return <h2 className='text-2xl text-moma-80 font-bold '>{text}</h2>;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  text: string;
  onRequestAddAccount: () => void;
}
const SectionHeader: React.VFC<Props> = ({ text, onRequestAddAccount }) => {
  return (
    <div className='flex justify-between align-center'>
      <Heading text={text} />
      <Button onClick={onRequestAddAccount} icon={<ReactIcon iconType='add' />} text='追加' />
    </div>
  );
};

export { SectionHeader };
