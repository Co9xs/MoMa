interface Props {
  activeUserId: string;
}

const GlobalHeader: React.VFC<Props> = ({ activeUserId }) => {
  return (
    <div className='flex justify-end align-center bg-moma-10 h-10 shadow px-6'>
      <span className='text-moma-70 leading-10'>{activeUserId}でログイン中</span>
    </div>
  );
};

export { GlobalHeader };
