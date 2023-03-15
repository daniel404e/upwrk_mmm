import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet, Link } from "react-router-dom";
import Header from "./components/header.jsx" 
import authbeforepage from './components/auth.js'
import Headerauthenticated from './components/headerafterauth.jsx'
function App() {

  const [homeauthstate, sethomeauthstate] = useState(0);
        
  useEffect(() => {

    authbeforepage().then((resultofprms)=>{

      const authstate =resultofprms
      if( authstate == 1)
   {
     
    sethomeauthstate(1);
     
   }
   else
   {
    sethomeauthstate(0);
   }
      
      
    
    })
  
   
  
   
   
  
  }, []);

  return (
    
    <div >
    {homeauthstate? <Headerauthenticated/> : <Header/>   } 
      <div className="container mx-auto sm:px-6 lg:px-8" style={{marginTop:"5%"}}>
      <h1>Meet My Mentor</h1>
       
       
        
        <h2>Landing Page</h2>
      </div>
      
  
       
    </div>
  )
}

export default App
