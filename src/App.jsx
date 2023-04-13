import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet, Link } from "react-router-dom";
 
function App() {

  const [homeauthstate, sethomeauthstate] = useState(1);
        
  

  return (
    
    <div >
  
      <div className="container mx-auto sm:px-6 lg:px-8" style={{marginTop:"5%"}}>
      <h1>Meet My Mentor</h1>
       
       
        
        <h2>Landing Page</h2>
      </div>
      
  
       
    </div>
  )
}

export default App
