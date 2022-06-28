import { Key, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { staticRoutes, protectedRoutes } from './routes';
import RequireAuth from './routes/route';

import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

import PageNotFound from './pages/PageNotFound';

import './App.css';

function App() {
  return (
    <>
      <Helmet>
        <title>Login - Highway.so</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
      </Helmet>

      <Routes>
        {staticRoutes.map(
          (route: { path: any; component: any }, idx: Key | null | undefined) => (
            <Route
              key={idx}
              path={route.path}
              element={<AuthLayout>{route.component()}</AuthLayout>}
            />
          )
        )}
        {protectedRoutes.map(
          (route: { path: any; component: any }, idx: Key | null | undefined) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <RequireAuth>
                  <MainLayout>{route.component()}</MainLayout>
                </RequireAuth>
              }
            />
          )
        )}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
