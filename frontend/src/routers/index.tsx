import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import RouteGuard from './route-guard';

const Home = lazy(() => import('pages/home'));
const Login = lazy(() => import('pages/login'));

const routers = createBrowserRouter([
  {
    path: '/',
    element: <RouteGuard />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

export default routers;
