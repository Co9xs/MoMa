interface Props {
  children: [React.ReactChild, ...React.ReactChild[]];
}

const LayoutWithNavigation: React.VFC<Props> = ({ children: [navigation, ...restChildren] }) => {
  return (
    <div className='relative h-screen'>
      <aside className='absolute left-0 top-0 bottom-0 h-full'>{navigation}</aside>
      <main className='pl-64 h-full'>{restChildren}</main>
    </div>
  );
};

export { LayoutWithNavigation };
