interface Props {
  icon: React.ReactNode;
}

export const Logo: React.VFC<Props> = ({ icon }) => {
  return (
    <div className='flex flex-row justify-center p-2 bg-black-200 text-white-100 w-full h-auto'>
      <span className='text-4xl pr-2'>{icon}</span>
      <span className='text-3xl font-medium pr-2'>MoMa</span>
    </div>
  );
};
