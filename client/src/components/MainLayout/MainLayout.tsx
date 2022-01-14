interface Props {
  children: [React.ReactChild, ...React.ReactChild[]];
}
const MainLayout: React.VFC<Props> = ({ children: [navigation, ...restChildren] }) => {
  return (
    <div className='relative h-screen'>
      <div className='absolute left-0 top-0 bottom-0 h-full'>{navigation}</div>
      <div className='pl-64 h-full'>{restChildren}</div>
    </div>
  );
};

export { MainLayout };
