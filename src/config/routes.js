import React, { lazy } from 'react';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const UpdatePassword = lazy(() => import('pages/UpdatePassword'));
const ForgotPassword = lazy(() => import('pages/ForgotPassword'));
const PaymentPage = lazy(() => import('pages/PaymentPage'));
const CustomersPage = lazy(() => import('pages/CustomersPage'));
const OrdersPage = lazy(() => import('pages/OrdersPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage'));
const PaymentPageWithOnBoarding = lazy(() => import('pages/PaymentPageWithOnBoarding'));
const CustomersPageWithOnBoarding = lazy(() => import('pages/CustomersPageWithOnBoarding'));
const ProductPageWithOnBoarding = lazy(() => import('pages/ProductPageWithOnBoarding'));
const HomePage = lazy(() => import('pages/HomePage'));
const UserAccountPage = lazy(() => import('pages/UserAccountPage'));
const MerchantProductsPage = lazy(() => import('pages/MerchantProductsPage'));

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    isProtected: false,
  },
  {
    path: '/register',
    exact: true,
    component: Register,
    isProtected: false,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    isProtected: false,
  },
  {
    path: '/update-password',
    exact: true,
    component: UpdatePassword,
    isProtected: false,
  },
  {
    path: '/forgot-password',
    exact: true,
    component: ForgotPassword,
    isProtected: false,
  },
  {
    path: '/payments',
    exact: false,
    component: PaymentPage,
    isProtected: false,
  },
  {
    path: '/payment-onboarding',
    exact: true,
    component: PaymentPageWithOnBoarding,
    isProtected: false,
  },
  {
    path: '/customers',
    exact: true,
    component: CustomersPage,
    isProtected: false,
  },
  {
    path: '/customers-onboarding',
    exact: true,
    component: CustomersPageWithOnBoarding,
    isProtected: false,
  },
  {
    path: '/products',
    exact: false,
    component: ProductsPage,
    isProtected: false,
  },
  {
    path: '/products-onboarding',
    exact: true,
    component: ProductPageWithOnBoarding,
    isProtected: false,
  },
  {
    path: '/user-account',
    exact: false,
    component: UserAccountPage,
    isProtected: false,
  },
  {
    path: '/orders',
    exact: false,
    component: OrdersPage,
    isProtected: false,
  },
  {
    path: '/merchant',
    exact: true,
    component: MerchantProductsPage,
    isProtected: false,
  },
];

export default routes;
