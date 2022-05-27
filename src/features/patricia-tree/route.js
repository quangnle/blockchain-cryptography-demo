import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'patricia-tree',
    path: '/patricia-tree',
    exact: true,
    component: Home
  }
];
