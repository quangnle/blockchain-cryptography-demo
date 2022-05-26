import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'nonce',
    path: '/nonce',
    exact: true,
    component: Home
  }
];
