import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'rsa',
    path: '/rsa',
    exact: true,
    component: Home
  }
];
