interface Props {
  icon: React.ReactNode;
}

export const Logo: React.VFC<Props> = ({ icon }) => {
  return (
    <div className='flex flex-row justify-center bg-moma-80 text-moma-10 w-full h-auto'>
      <span className='text-4xl pr-2'>{icon}</span>
      <span className='text-3xl font-medium pr-3'>MoMa</span>
    </div>
  );
};
