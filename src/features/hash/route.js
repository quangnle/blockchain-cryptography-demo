import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'hash',
    path: '/hash',
    exact: true,
    component: Home
  }
];
