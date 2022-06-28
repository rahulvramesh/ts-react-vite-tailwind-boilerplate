const Login = () => {
  return 'hiii';
};

// Protected Rourtes
const protectedRoutes: any = [
  {
    path: '/profile',
    component: Login,
  },
];

// Static Routes || Public Routes
const staticRoutes: any = [
  {
    path: '/login',
    component: Login,
  },
];

export { protectedRoutes, staticRoutes };
