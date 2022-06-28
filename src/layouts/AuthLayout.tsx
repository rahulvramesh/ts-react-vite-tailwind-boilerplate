import * as React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FunctionComponent<AuthLayoutProps> = (props) => {
  return (
    <>
      <div className="min-h-screen  bg-gray-50 font-Montserrat  antialiased">
        {props.children}
      </div>
    </>
  );
};

export default AuthLayout;
