interface Props {
  children: [React.ReactChild, ...React.ReactChild[]];
}

const LayoutWithNavigation: React.VFC<Props> = ({ children: [navigation, globalHeader, ...restChildren] }) => {
  return (
    <div className='relative h-screen'>
      <aside className='absolute left-0 top-0 bottom-0 h-full z-10'>{navigation}</aside>
      <div className='absolute right-0 left-0 top-0 w-full'>{globalHeader}</div>
      <main className='pl-64 pt-10 h-full'>{restChildren}</main>
    </div>
  );
};

export { LayoutWithNavigation };
