import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Homepage from './ui/Homepage';
import Error from './ui/error';
import Login from './ui/Login';
import Admin from './ui/Admin';
import Page from './ui/Page';
import Stats from './ui/Stats';
import Styles from './ui/Styles';
import Settings from './ui/Settings';
import SignInRedirect from './ui/SignInRedirect';
import Account from './components/Account';
import Billing from './components/Billing';
import { useSelector } from 'react-redux';

function App() {
  const {isAuthenticated} = useSelector(state => state.user) ; 
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
          path: 'stats',
          element: <Stats />
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
            {
              path: 'billing',
              element: <Billing />
            }
          ]
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App; 
