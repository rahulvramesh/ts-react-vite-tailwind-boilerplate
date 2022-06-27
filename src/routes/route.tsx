import React from "react";
import { Route,Navigate } from "react-router-dom";
//@ts-ignore
import { useAuth } from "../contexts/Auth"

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected: isAuthProtected,
  ...rest
}: any) => {
  const user: any = useAuth()

  return (
    <Route
      {...rest}

      render={(props: any) => {if (isAuthProtected && user.user === null) {
        return <Navigate to="/login" />
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
      }}
    />
  );
}
