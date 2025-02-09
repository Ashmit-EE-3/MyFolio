import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './ui/Homepage';
import Error from './ui/error';
import Login from './ui/Login';
import Admin from './ui/Admin';

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
    errorElement:<Error/>
  }
]) 

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App ; 
