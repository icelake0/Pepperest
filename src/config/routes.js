import {Register, Login, UpdatePassword, ForgotPassword, PaymentPage, CustomersPage, OrdersPage, ProductsPage } from  'pages'


const routes = [
  {
    path: '/',
    exact: true,
    component: PaymentPage,
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
  },
  {
    path: '/payment',
    exact: true,
    component: PaymentPage,
    isProtected: false
  },
  {
    path: '/customers',
    exact: true,
    component: CustomersPage,
    isProtected: false
  },
  {
    path: '/products',
    exact: true,
    component: ProductsPage,
    isProtected: false
  },
  {
    path: '/orders',
    exact: true,
    component: OrdersPage,
    isProtected: false
  }
];

export default routes;