import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export default [
  {
    name: 'noninteractive-zkp',
    path: '/noninteractive-zkp',
    exact: true,
    component: Home
  }
];
