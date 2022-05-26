import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'merkle-tree',
    path: '/merkle-tree',
    exact: true,
    component: Home
  }
];
