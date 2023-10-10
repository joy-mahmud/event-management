import React from 'react'
import ReactDOM from 'react-dom/client'
import AthenticationProvider from './AuthProvider/AthenticationProvider';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorRoute from './ErrorRoute/ErrorRoute';
import Home from './Home/Home';
import Services from './Services/Services';
import PrivateRoute from './Private/PrivateRoute';
import Deatails from './details/Deatails';

import Login from './LogIn/Login';
import Registration from './Register/Registration';
import Portfolio from './portfolio/Portfolio';
import About from './About/About';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorRoute></ErrorRoute>,
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/services',
        element:<Services></Services>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Deatails></Deatails></PrivateRoute>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/portfolio',
        element:<Portfolio></Portfolio>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AthenticationProvider>
      <RouterProvider router={router} />
    </AthenticationProvider>
  </React.StrictMode>,
)
