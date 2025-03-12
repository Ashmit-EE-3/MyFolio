import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { lazy } from "react";
import Spinner from "./ui/Spinner";
import { Suspense } from "react";

const Homepage = lazy(() => import("./ui/Homepage"));
const Error = lazy(() => import("./ui/Error"));
const Admin = lazy(() => import("./ui/Admin"));
const Page = lazy(() => import("./ui/Page"));
const Styles = lazy(() => import("./ui/Styles"));
const Settings = lazy(() => import("./ui/Settings"));
const Login = lazy(() => import("./ui/Login"));
const SignInRedirect = lazy(() => import("./ui/SignInRedirect"));
const Portfolio = lazy(() => import("./ui/Portfolio"));
const Account = lazy(() => import("./components/Account"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      element: <SignInRedirect />,
      path: "/signInRedirect",
      errorElement: <Error />,
    },
    {
      path: "/admin",
      element: (
        <PrivateRoute>
          <Admin />
        </PrivateRoute>
      ),
      errorElement: <Error />,
      children: [
        {
          element: <Navigate to="page" replace />,
          index: true,
        },
        {
          element: <Page />,
          path: "page",
        },
        {
          path: "styles",
          element: <Styles />,
        },
        {
          path: "settings",
          element: <Settings />,
          children: [
            {
              element: <Navigate to="account" replace />,
              index: true,
            },
            {
              path: "account",
              element: <Account />,
            },
          ],
        },
      ],
    },
    {
      path: "/:username",
      element: <Portfolio />,
      errorElement: <Error />,
    },
  ]);

  return (
    <>
      <Suspense fallback={Spinner}>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer limit={2} hideProgressBar />
    </>
  );
}

export default App;
