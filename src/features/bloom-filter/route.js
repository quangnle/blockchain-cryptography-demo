import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'bloom-filter',
    path: '/bloom-filter',
    exact: true,
    component: Home
  }
];
