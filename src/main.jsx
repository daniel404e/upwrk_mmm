import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Explorepage from './pages/explore.jsx'
import Loginpage from './pages/login.jsx'
import Mentorprofileviewpage from './pages/mentorprofileview.jsx'
import Mentorsignuppage from './pages/mentorsignup.jsx'
import Signuppage from './pages/signup.jsx'
import Addbankdetailpage from './pages/addbankdetails.jsx'
import Addservicesofferedduringonboardingpage from './pages/addservicesofferedduringonboarding.jsx'
import Dashboardpage from './pages/dashboard.jsx'
import Generalerrorpage from './pages/generalerror.jsx'
import Paymentfailurepage from './pages/paymentfailure.jsx'
import Logoutpage from './pages/logout.jsx'
import Meetingpage from './pages/meetingpage.jsx'
 

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Loginpage/>,
  },
  {
    path: "/mentorprofileview/:profileuniqid",
    element: <Mentorprofileviewpage/>,
  },
  {
    path: "/mentorsignup",
    element: <Mentorsignuppage/>,
  },
  {
    path: "/signup",
    element: <Signuppage/>,
  },
  {
    path: "/addbankdetails",
    element: <Addbankdetailpage/>,
  },
  
  {
    path: "/addservicesofferedduringonboarding",
    element: <Addservicesofferedduringonboardingpage/>,
  },
  {
    path: "/dashboard",
    element: <Dashboardpage/>,
  },
  {
    path: "/generalerror",
    element: <Generalerrorpage/>,
  },
  {
    path: "/paymentfailure",
    element: <Paymentfailurepage/>,
  },
 
  
  {
    path: "/explore",
    element: <Explorepage/>,
  },
  {
    path: "/logout",
    element: <Logoutpage/>,
  },
  {
    path: "/meeting/:bookingid",
    element: <Meetingpage/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
      <RouterProvider router={router} />
    
  </React.StrictMode>,
)
