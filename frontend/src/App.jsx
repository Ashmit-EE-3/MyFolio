import './App.css'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import Homepage from './ui/Homepage';
import Error from './ui/error';
import Login from './ui/Login';
import Admin from './ui/Admin';
import Page from './ui/Page';
import Stats from './ui/Stats';
import Styles from './ui/Styles';
import Settings from './ui/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>,
    errorElement: <Error/>,
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <Error/>
  },
  {
    path:'/admin',
    element:<Admin/>,
    errorElement:<Error/>,
    children:[
      {
        element:<Navigate to='page' replace/>,
        index:true
      },
      {
        element:<Page/>,
        path:'page'
      },
      {
        path:'styles',
        element:<Styles/>
      },
      {
        path:'stats',
        element:<Stats/>
      },
      {
        path:'settings',
        element:<Settings/>
      }
    ]
  }
]) 

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App ; 
