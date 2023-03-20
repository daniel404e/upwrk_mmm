import { Outlet, Link } from "react-router-dom";
import Header from '../components/header.jsx'
import Headerauthenticated from '../components/headerafterauth.jsx'
import authbeforepage from '../components/auth.js'
import React, { useState , useEffect} from 'react';
import Searchandfilterbar from '../components/searchbar.jsx'
import Profilegrid from '../components/explorepagegrid.jsx'


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


  const [activefiltersinexplore, setactivefiltersinexplore] = useState([]);
  const [searchboxdata, setsearchboxdata] = useState(null);


  function datafromsearchbartoexplore(data)
  {

    const toloaddatatemp = [];
    Object.entries(data).forEach((entry) => {
      const [key, value] = entry;
      
      
    
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) 
         {
          
          if(value.label  !=  "All Category" && value.label  !=  "All Languages" ){
             toloaddatatemp.push(value) 
          }
           }
    
           if ( Array.isArray(value) && value !== null) 
         {
          
           
             value.forEach(element => {
              
              
                if(element.checkstatus == true)
                {
                   
                  toloaddatatemp.push({ value: element.name, label:  element.name ,cbheading: key})
                   
                
                }
    
              
               
               
    
    
             });
        
           } 

           setsearchboxdata(data.search)
           setactivefiltersinexplore(toloaddatatemp )
           console.log(data)
    
           
     
    });

  }


  return (
    
    <div >
   {exploreauthstate? <Headerauthenticated/> : <Header/>   } 

    <div className="container mx-auto sm:px-6 lg:px-8" style={{marginTop:"5%"}} >
      
      <Searchandfilterbar  senddatatoexplore={datafromsearchbartoexplore} />
       
       {<p>{searchboxdata +" "+ JSON.stringify(activefiltersinexplore)}</p>}
      
       <Profilegrid/>
        
       
           
       
        
     
      
      
       
    </div>
    </div>
  )
}

export default Explorepage
