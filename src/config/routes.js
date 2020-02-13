import {
  Register,
  Login,
  UpdatePassword,
  ForgotPassword,
  PaymentPage,
  CustomersPage,
  OrdersPage,
  ProductsPage,
  PaymentPageWithOnBoarding,
  CustomersPageWithOnBoarding,
  ProductPageWithOnBoarding,
  HomePage
} from 'pages';


const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
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
    path: '/payments',
    exact: false,
    component: PaymentPage,
    isProtected: false
  },
  {
    path: '/payment-onboarding',
    exact: true,
    component: PaymentPageWithOnBoarding,
    isProtected: false
  },
  {
    path: '/customers',
    exact: true,
    component: CustomersPage,
    isProtected: false
  },
  {
    path: '/customers-onboarding',
    exact: true,
    component: CustomersPageWithOnBoarding,
    isProtected: false
  },
  {
    path: '/products',
    exact: false,
    component: ProductsPage,
    isProtected: false
  },
  {
    path: '/products-onboarding',
    exact: true,
    component: ProductPageWithOnBoarding,
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