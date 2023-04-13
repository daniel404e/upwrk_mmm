import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Explorepage from './pages/explore.jsx'
 
 
 
import Generalerrorpage from './pages/generalerror.jsx'
 
 
 
import Scrappycodetodelete from './pages/scrappycodetodelete'
 

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
    path: "/generalerror",
    element: <Generalerrorpage/>,
  },
 
 
  
  {
    path: "/explore",
    element: <Explorepage/>,
  },
  
   
  {
    path: "/scrappycodetodelete",
    element: <Scrappycodetodelete/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
      <RouterProvider router={router} />
    
  </React.StrictMode>,
)
