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
import JobList from './Pages/Jobs/JobList';
import CreateJob from './Pages/Jobs/Partial/CreateJob';
import { callGetApi } from './asset/axios/axiosApi';
import { getLocalStorage } from './Comman/Comman';


function App() {
  const user = getLocalStorage();
  const ErrorPage = () => <div>Error loading data.</div>;
console.log("user",user)
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
            return await callGetApi({ url: `user/job/list/${user.data._id}` });
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
