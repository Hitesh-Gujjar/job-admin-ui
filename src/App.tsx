import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from './Pages/Auth/Auth';
import Registration from './Pages/Auth/Partial/Registration';
import Career from './Pages/Career/Career';
import ProtectedRoute from './Component/ProtectedRoute ';
import Dashboard from './Pages/Dashboard/Dashboard';
import Layout from './Component/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/sign-in",
      element: <Auth />,
    },
    {
      path: "/sign-up",
      element: <Registration />,
    },
    {
      path: "/",
      element: <ProtectedRoute
        component={<Layout />}
      />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
          // loader: teamLoader,
        },
        {
          path: "career",
          element: <Career />,
          // loader: teamLoader,
        },
      ],
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
