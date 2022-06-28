import * as React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FunctionComponent<AuthLayoutProps> = (props) => {
  return (
    <>
      <div className="h-full font-Montserrat  antialiased">{props.children}</div>
    </>
  );
};

export default AuthLayout;
