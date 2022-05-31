import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'caesar',
    path: '/caesar',
    exact: true,
    component: Home
  }
];
