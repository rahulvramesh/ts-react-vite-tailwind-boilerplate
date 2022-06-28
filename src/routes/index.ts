import LoginPage from '../pages/LoginPage';

// Protected Rourtes
const protectedRoutes: any = [
  {
    path: '/profile',
    component: LoginPage,
  },
];

// Static Routes || Public Routes
const staticRoutes: any = [
  {
    path: '/login',
    component: LoginPage,
  },
];

export { protectedRoutes, staticRoutes };
