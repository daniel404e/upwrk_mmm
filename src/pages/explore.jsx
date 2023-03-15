import { Outlet, Link } from "react-router-dom";
import Header from '../components/header.jsx'
import Headerauthenticated from '../components/headerafterauth.jsx'
import authbeforepage from '../components/auth.js'
import React, { useState , useEffect} from 'react';
import Searchandfilterbar from '../components/searchbar.jsx'

function Explorepage() {
     
  const [exploreauthstate, setexploreauthstate] = useState(0);
        
  useEffect(() => {

    authbeforepage().then((resultofprms)=>{

      const authstate =resultofprms
      if( authstate == 1)
   {
     
    setexploreauthstate(1);
     
   }
   else
   {
    setexploreauthstate(0);
   }
      
      
    
    })
  
   
  
   
   
  
  }, []);



  return (
    
    <div >
   {exploreauthstate? <Headerauthenticated/> : <Header/>   } 

    <div className="container mx-auto sm:px-6 lg:px-8" style={{marginTop:"5%"}} >
      
      <Searchandfilterbar/>
      <div>
      <h1  >Explore Your Favourite Mentors</h1>
       
        
      <div >
      
      <Link style={{color:"white"}} to={`../`}> <button style={{marginRight:"10px"}} > Back </button></Link>
      <Link style={{color:"white"}} to={`../dashboard`}> <button style={{marginRight:"10px"}} > Dashboard </button></Link>
       <button style={{marginRight:"10px"}} > Notifications </button> 
       <button style={{marginRight:"10px"}} > Profile Icon </button> 
      
        
      </div>
           
        <div style={{marginBottom:"10px"}}>
        <h2 style={{display:"inline-block" , marginRight:"10px"}}>Search bar</h2>
        <button  >
          Search
        </button>
        </div>
        <Link style={{color:"white"}} to={`../mentorprofileview`}> <button style={{marginRight:"10px"}} > Profiles Grid </button></Link>
      </div>
      
      
       
    </div>
    </div>
  )
}

export default Explorepage
