import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'interactive-zkp',
    path: '/interactive-zkp',
    exact: true,
    component: Home
  }
];
