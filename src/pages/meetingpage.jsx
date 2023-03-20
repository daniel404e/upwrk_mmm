
import authbeforepage from '../components/auth.js'
import { useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting ,DyteFullscreenToggle } from '@dytesdk/react-ui-kit';
import {  useState,useEffect} from 'react'
import Headerauthenticated from '../components/headerafterauth.jsx' 
import Header from '../components/header.jsx'
import { Outlet, Link , redirect ,Navigate, Route, Routes, useNavigate  } from "react-router-dom";
import Headingforpage from "../components/headingformeetingpage.jsx"

function Generalerrorpage() {
  
    const [meeting, initMeeting] = useDyteClient();
       const [meetingpageauthstate, setmeetingpageauthstate] = useState(0);
       const navigate = useNavigate();
       
       useEffect(() => {
        
         authbeforepage().then((resultofprms)=>{
     
           const authstate =resultofprms
           console.log("this is authstate"+"  "+authstate)
           if( authstate == 1)
        {
          
            setmeetingpageauthstate(1);
          
        }
        else
        {
            setmeetingpageauthstate(0);

            navigate("/login");
        }
           
           
         
         })
       


         initMeeting({
            authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImVmOTQ4MGFiLTJlYzEtNDQyNS1iZWU0LTdiNzczYzgwY2YyYSIsIm1lZXRpbmdJZCI6ImJiYjY3Y2Q3LTYyNTYtNGE3ZS1hYTk2LWUxNjE3ODUwOTA3YyIsInBhcnRpY2lwYW50SWQiOiJhYWE3YmNkNS00ZDM0LTQyYjUtOGU0YS0yYzEyNzY5MzZlNGQiLCJwcmVzZXRJZCI6IjRjOTEyZjcwLTZjYTMtNGE3MC05ZWI0LWVjMmEzYWMyNDMzNSIsImlhdCI6MTY3OTE4MTUyNiwiZXhwIjoxNjg3ODIxNTI2fQ.P4aPD6mKImXu1M7eBzB6o-eWZNCT-JH5alSvHCz6FsWYhA45Yl9FfiW8ZhTAK50Rn7CQpk1juBhUQg9jDDF6IZxVBOrm4UeW-tQzts23q6y9Wvr6rMg0z56kotrlZ-y7tm3W8qt4lNZu3vODd16Dzxmh219_JN2WicQgXtClj7EGCWIpI8NjIZoEX40FVj3DrIxfwzymxGruUrsO2mjepVY2JKGnFku1S6YbTLL-WKxS-by9pZiqYRNKqV1MLAvaYhHEiUFvtylbt0KEcPJjeHiKa9XnGlCh6RXoHQ712AG7M8WmvEiY9QEayS3nAxSuQDTqOo4YLhvrru9CIyZZFw',
            defaults: {
              audio: false,
              video: false,
            },
          });
        
       
        
        
       
       }, []);



     
     

       
       
     



 
    return (
      
      <div className="mx-auto max-w-7xl px-1 sm:px-1 lg:px-1   " style={{       height:"100vh"}}>
              {meetingpageauthstate? <Headerauthenticated/> : <Header/>   } 
              
               
              <Headingforpage meetingname={"Abroad consultation class"}  meetingbookedtiming={"Monday IST:[3:00pm]-[4:00pm]"}  />
              <div className="      w-full   flex justify-center" style={{marginTop:"1.5%"}}>
              <h2 className="text-md   text-gray-700 " style={{display:"inline-block"}}>You are meeting  </h2>
              <h1 className="text-xl font-bold text-gray-900  " style={{display:"inline-block" , marginLeft:"5px"}}>  Mary Sue</h1>
              
              </div>

              <div className="      w-full   flex justify-center" style={{marginBottom:"1.5%"}} >
              <p className="mt-1 truncate text-sm text-gray-500 "  style={{display:"inline" , marginTop:"0px"}}>Tell mary a hi on our behalf :)</p>
              </div>
               
       
               <div className="      w-full relative flex justify-center"   style={{        height:"80%"  }}>
                   
                   <DyteMeeting meeting={meeting} className='relative flex rounded-2xl max-[800x]:w-full w-11/12'  mode="fixed" style={{  height:"100%"   }}/>

                     </div>


                     <div className="      w-full   flex justify-center" style={{marginTop:"14px"}}>
         <DyteFullscreenToggle variant="horizontal" className='relative flex rounded-2xl  ' style={{  width:"160px"   }}/>

         </div>

          
      </div>
    )
  }
  
  export default Generalerrorpage
  