
import authbeforepage from '../components/auth.js'
import { useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting ,DyteFullscreenToggle } from '@dytesdk/react-ui-kit';
import {  useState,useEffect} from 'react'
import Headerauthenticated from '../components/headerafterauth.jsx' 
import Header from '../components/header.jsx'
import { Outlet, Link , redirect ,Navigate, Route, Routes, useNavigate  } from "react-router-dom";
import Headingforpage from "../components/headingformeetingpage.jsx"

function Meetingpage() {
               
           

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

         //meetingpage is usually followed by a /booking_id param
         //the booking_id is used for creating or validating or eliminating a meeting room
         //Send a validate request to server for unique booking_id 
         //if all the parameters[booking time-window,requesting_user==Booked_user,More than one instence of user open in meeting ,if meeting_id already present ,if authtokens havebeen created for users]
         //if all is validated and good then render this page else navigate back to bookings in dashboard
         //run a timer on the page for its expiry [local time and spaced time_api calls] to close the page .
         //once the page expires or is navigated to a different page it will not render again as it has to be validated but the time_window will be invalid.


         initMeeting({
            authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImVmOTQ4MGFiLTJlYzEtNDQyNS1iZWU0LTdiNzczYzgwY2YyYSIsIm1lZXRpbmdJZCI6ImJiYmJhOGYzLWVmNGEtNDFhZS04YjZjLTVkNTFjM2VjNTUxZiIsInBhcnRpY2lwYW50SWQiOiJhYWE4MmNhMy01Mzg1LTQ2MDAtOTQ5Ni04ODNkMjcxNTcyYTYiLCJwcmVzZXRJZCI6ImI2ZGU5ODQ1LTY5MTEtNGFjZC1hMGExLThiNjM5OGY5NjQxOCIsImlhdCI6MTY3OTI5OTMyMCwiZXhwIjoxNjg3OTM5MzIwfQ.FbjEPduadvJOPZlab2nMkxO0cbGlsaL3aoSSgKNmMlmIxmMdOBRtX8QxMjGP_seNiJjS0il_hAIw3bwz187hUYCvrz_tHrzxJqGwPoKHx26nyCLagvxPs1hre50rTypwDl0cbC69lFJ9tIYC_URxk5HMIOfjNPybGc_sxnp0PoBig5IS7LsLDbvi-TH5jaBPMhynKOANR0ahDkURN8s5-daHSzzfXiwMqJHMNOlJ6spaDHfsbdoJKkTPI8nB5VAeLI0fEmoQ7qgPAx5MRUzYAJ9ZttLlEAPQ3c9e_j2huiuzdoBG-UPPz8naRQ3o5cAf_8kzngvIfGEHRloBvk8QcQ',
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
  
  export default Meetingpage
  