import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Container: React.VFC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
