import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Homepage from './ui/Homepage';
import Error from './ui/Error';
import Login from './ui/Login';
import Admin from './ui/Admin';
import Page from './ui/Page';
import Styles from './ui/Styles';
import Settings from './ui/Settings';
import SignInRedirect from './ui/SignInRedirect';
import Account from './components/Account';
import { ToastContainer } from 'react-toastify';
import Portfolio from './ui/Portfolio';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
      errorElement: <Error />,
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
    },
    {
      element: <SignInRedirect />,
      path: '/signInRedirect',
      errorElement: <Error />,
    },
    {
      path: '/admin',
      element: <PrivateRoute><Admin /></PrivateRoute>,
      errorElement: <Error />,
      children: [
        {
          element: <Navigate to='page' replace />,
          index: true
        },
        {
          element: <Page />,
          path: 'page',
        },
        {
          path: 'styles',
          element: <Styles />
        },
        {
          path: 'settings',
          element: <Settings />,
          children: [
            {
              element: <Navigate to='account' replace />,
              index: true
            },
            {
              path: 'account',
              element: <Account />
            },
          ]
        }
      ]
    },
    {
      path: '/:username',
      element: <Portfolio />,
      errorElement: <Error />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer limit={2} hideProgressBar />
    </>
  );
}

export default App; 
