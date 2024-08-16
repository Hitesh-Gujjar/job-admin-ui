import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { LoaderFunctionArgs, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from './Pages/Auth/Auth';
import Registration from './Pages/Auth/Partial/Registration';
import Career from './Pages/Career/Career';
import ProtectedRoute from './Component/ProtectedRoute ';
import Dashboard from './Pages/Dashboard/Dashboard';
import Layout from './Component/Layout';
import JobList from './Pages/Jobs/JobList';
import CreateJob from './Pages/Jobs/Partial/CreateJob';
import { callGetApi } from './asset/axios/axiosApi';
import { getLocalStorage } from './Comman/Comman';
import { useDispatch, useSelector } from 'react-redux';



function App() {

  const dispatch = useDispatch();
  const state: any = useSelector((state: any) => state)
  const ErrorPage = () => <div>Error loading data.</div>;



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
      element: <ProtectedRoute component={<Layout />} />,
      children: [
        {
          path: "/job-list",
          element: <JobList />,
          loader: async ({ request, params }) => {
            const user = getLocalStorage();
            return await callGetApi({ url: `user/job/list/${user?.data?._id}` });
          },
          errorElement: <ErrorPage />,
        },
        {
          path: "/create-job",
          element: <CreateJob />,
        },
        {
          path: "career",
          element: <Career />,
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
