import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './ui/Homepage';
import Error from './ui/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>,
    errorElement: <Error/>
  },
]) 

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App ; 
