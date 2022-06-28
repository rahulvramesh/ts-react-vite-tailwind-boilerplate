import * as React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
  return (
    <>
      <div className="min-h-screen  bg-gray-50 font-Montserrat  antialiased">
        {props.children}
      </div>
    </>
  );
};

export default MainLayout;
