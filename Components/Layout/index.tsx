import React, { FC, PropsWithChildren } from 'react';
import Header from '../Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className=" mt-20">{children}</div>
    </>
  );
};

export default Layout;
