import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Homepage from './ui/Homepage';
import Error from './ui/error';
import Login from './ui/Login';
import Admin from './ui/Admin';
import Page from './ui/Page';
import Styles from './ui/Styles';
import Settings from './ui/Settings';
import SignInRedirect from './ui/SignInRedirect';
import Account from './components/Account';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Portfolio from './ui/Portfolio';

function App() {
  const  isAuthenticated  = useSelector((state) => state.user.isAuthenticated);
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
      element: isAuthenticated ? <Admin /> : <Navigate to="/login" replace />,
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
      path: '/portfolio/:username',
      element: <Portfolio />,
      errorElement: <Error />,
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer limit={2} hideProgressBar />
    </>
  )
}

export default App; 
