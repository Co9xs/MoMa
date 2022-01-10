type Props = {
  text: string;
};

const App: React.VFC<Props> = ({ text }) => {
  return <div className="font-bold text-2xl underline p-10">{text}</div>;
};

export { App };
