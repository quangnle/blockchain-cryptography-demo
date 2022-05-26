import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'chain',
    path: '/chain',
    exact: true,
    component: Home
  }
];
