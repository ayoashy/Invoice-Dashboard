import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App as AntDesignApp } from 'antd';

import React from 'react';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import { QueryClient, QueryClientProvider } from 'react-query';

const router = createBrowserRouter([
  {
    path: '/login',
    index: true,
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forget-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password/:resetToken',
    element: <ResetPassword />,
  },

  {
    path: '/*',
    element: <Navigate to='/login' />,
  },
]);

const queryClient = new QueryClient();

const UnauthenticatedApp = () => (
  <QueryClientProvider client={queryClient}>
    <AntDesignApp>
      <RouterProvider router={router} />
    </AntDesignApp>
  </QueryClientProvider>
);
export default UnauthenticatedApp;
