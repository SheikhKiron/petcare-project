import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Profile from "../Pages/Profile";
import ServiceDetails from "../Pages/ServiceDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Auth/PrivateRoute";
import Error from "../Pages/error";
import Forget from './../Pages/Forget';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
   errorElement:<Error/>,
    children: [
      { index: true, Component: Home },
      {path:'/services',Component:Services},
      {
        path: '/my-profile', element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: '/service-details/:id', element: <PrivateRoute>
        <ServiceDetails/>
      </PrivateRoute>},
      {path:'/login',Component:Login},
      {path:'/register',Component:Register},
      { path: '/forget', Component: Forget },
    ]
  },
]);
