import {Register, Login, UpdatePassword, ForgotPassword } from  'pages'


const routes = [
  {
    path: '/',
    exact: true,
    component: Register,
    isProtected: false
  },
  {
    path: '/register',
    exact: true,
    component: Register,
    isProtected: false
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    isProtected: false
  },
  {
    path: '/update-password',
    exact: true,
    component: UpdatePassword,
    isProtected: false
  },
  {
    path: '/forgot-password',
    exact: true,
    component: ForgotPassword,
    isProtected: false
  }
];

export default routes;