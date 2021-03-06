import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'digital-signature',
    path: '/digital-signature',
    exact: true,
    component: Home
  }
];
