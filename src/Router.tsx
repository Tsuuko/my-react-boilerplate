import { ReactLocation, Route } from 'react-location';

import { Home } from '@/features/home';
import { NotFound } from '@/features/notExistRoute';
import { Sandbox } from '@/features/sandbox';

export const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
    // element: <Sandbox />,
  },
  {
    path: '/sandbox',
    element: <Sandbox />,
  },
  {
    path: '*',
    element: <NotFound redirectSec={3} to="/" pageTitle="トップページ" />,
    // element: <Navigate replace to="/" />,
  },
];
