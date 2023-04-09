
import authbeforepage from '../components/auth.js'
import { useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting ,DyteFullscreenToggle } from '@dytesdk/react-ui-kit';
import {  useState,useEffect} from 'react'
import Headerauthenticated from '../components/headerafterauth.jsx' 
import Header from '../components/header.jsx'
import { Outlet, Link , redirect ,Navigate, Route, Routes, useNavigate  } from "react-router-dom";
import Headingforpage from "../components/headingformeetingpage.jsx"
import { useParams } from "react-router";
import timezoneslist from '../data/timezones.json'
 import dayjs  from  'dayjs'
 import { toast, ToastContainer } from 'react-toastify';
 import customParseFormat from 'dayjs/plugin/customParseFormat'
 import relativeTime  from  'dayjs/plugin/relativeTime'
 
 dayjs.extend(relativeTime)

 dayjs.extend(customParseFormat)

function Meetingpage() {
               
           
  let { bookingid } = useParams();
    const [meeting, initMeeting] = useDyteClient();
       const [meetingpageauthstate, setmeetingpageauthstate] = useState(0);
       const navigate = useNavigate();

       const[onetimeonly,setonetimeonly]=useState(0)
       
       const [bookinginfo,setbookinginfo] = useState({ 
          
           sessiontitle:"Abroad consultation class",
           weekday:"Monday",
           timezone:"IST",
           fromtime:"3:00pm",
           totime:"4:00pm",
           fname:"Mary",
           lname:"Sue"

           }   )
       
         //const server = "https://165.232.114.169:4100"
  const server ="http://localhost:4100"

  function findabbr(tzne)
  {   
    var abbriv =null
    timezoneslist.forEach((element,inddex) => {
      
      if(tzne == element.value)
      {
         abbriv =element.abbr
      }
      
    });

    return(abbriv)

  }

       
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
         //if all the parameters[booking time-window,requesting_user != Booked_user,More than one instence of user open in meeting ,if meeting_id already present ,if authtokens havebeen created for users]
         //if all is validated and good then render this page else navigate back to bookings in dashboard
         //run a timer on the page for its expiry [local time and spaced time_api calls] to close the page .
         //once the page expires or is navigated to a different page it will not render again as it has to be validated but the time_window will be invalid.
         
         

         fetch(server+"/getbookingsbybookingid", {
     
          // Adding method type
          method: "POST",
           
          // Adding body or contents to send
          body: JSON.stringify({ bookingidqry: {"bookingid" : String(bookingid)} , uniqid:sessionStorage.getItem("uniqid")}),
           
          // Adding headers to the request
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      })
       
      // Converting to JSON
      .then(response =>  response.json())
       
      // // Displaying results to console
        .then((json) => { 

                


          console.log(json)
          
          if(json.tstatus == "windowopen" )
          {

            if(json.bookingdetailsbyid.menteeuniqid == sessionStorage.getItem("uniqid") )   //if menteeee
            {
                        
              const touploaddatum = { 
          
                sessiontitle:json.bookingdetailsbyid.sessiondetails.sessiontitle,
                weekday:dayjs(json.bookingdetailsbyid.menteedatetime.fromdatetime , "DD-MM-YYYY_hh:mm A").format("dddd"),
                timezone:findabbr(json.bookingdetailsbyid.menteedatetime.timezone),
                fromtime:dayjs(json.bookingdetailsbyid.menteedatetime.fromdatetime , "DD-MM-YYYY_hh:mm A").format("h:mma"),
                totime:dayjs(json.bookingdetailsbyid.menteedatetime.todatetime , "DD-MM-YYYY_hh:mm A").format("h:mma"),
                fname:json.bookingdetailsbyid.mentorname.fname,
                lname:json.bookingdetailsbyid.mentorname.lname
     
                } 

                setbookinginfo(touploaddatum)  

              
               fetch(server+"/createmeetingandaddparticipant", {
     
                // Adding method type
                method: "POST",
                 
                // Adding body or contents to send
                body: JSON.stringify({ whoosasking: "mentee" , uniqid:sessionStorage.getItem("uniqid")  ,"bookingid": String(bookingid) , uname: json.bookingdetailsbyid.menteename.fname+" "+json.bookingdetailsbyid.menteename.lname   }),
                 
                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response =>  response.json()).then((json) => { 

                console.log(json)

               
              if(onetimeonly == 0)
              {
                //'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImVmOTQ4MGFiLTJlYzEtNDQyNS1iZWU0LTdiNzczYzgwY2YyYSIsIm1lZXRpbmdJZCI6ImJiYmJhOGYzLWVmNGEtNDFhZS04YjZjLTVkNTFjM2VjNTUxZiIsInBhcnRpY2lwYW50SWQiOiJhYWE4MmNhMy01Mzg1LTQ2MDAtOTQ5Ni04ODNkMjcxNTcyYTYiLCJwcmVzZXRJZCI6ImI2ZGU5ODQ1LTY5MTEtNGFjZC1hMGExLThiNjM5OGY5NjQxOCIsImlhdCI6MTY3OTI5OTMyMCwiZXhwIjoxNjg3OTM5MzIwfQ.FbjEPduadvJOPZlab2nMkxO0cbGlsaL3aoSSgKNmMlmIxmMdOBRtX8QxMjGP_seNiJjS0il_hAIw3bwz187hUYCvrz_tHrzxJqGwPoKHx26nyCLagvxPs1hre50rTypwDl0cbC69lFJ9tIYC_URxk5HMIOfjNPybGc_sxnp0PoBig5IS7LsLDbvi-TH5jaBPMhynKOANR0ahDkURN8s5-daHSzzfXiwMqJHMNOlJ6spaDHfsbdoJKkTPI8nB5VAeLI0fEmoQ7qgPAx5MRUzYAJ9ZttLlEAPQ3c9e_j2huiuzdoBG-UPPz8naRQ3o5cAf_8kzngvIfGEHRloBvk8QcQ'
               initMeeting({
                authToken: json.autht,
                defaults: {
                  audio: false,
                  video: false,
                   
                },
              });

              setonetimeonly(1)

            }


          })






         

            }


            else if(json.bookingdetailsbyid.mentoruniqid == sessionStorage.getItem("uniqid") ) //if mentor
            {

              const touploaddatum = { 
          
                sessiontitle:json.bookingdetailsbyid.sessiondetails.sessiontitle,
                weekday:dayjs(json.bookingdetailsbyid.mentordatetime.fromdatetime , "DD-MM-YYYY_hh:mm A").format("dddd"),
                timezone:findabbr(json.bookingdetailsbyid.mentordatetime.timezone),
                fromtime:dayjs(json.bookingdetailsbyid.mentordatetime.fromdatetime , "DD-MM-YYYY_hh:mm A").format("h:mma"),
                totime:dayjs(json.bookingdetailsbyid.mentordatetime.todatetime , "DD-MM-YYYY_hh:mm A").format("h:mma"),
                fname:json.bookingdetailsbyid.menteename.fname,
                lname:json.bookingdetailsbyid.menteename.lname
     
                } 
                       
                setbookinginfo(touploaddatum)
              

              
               fetch(server+"/createmeetingandaddparticipant", {
     
                // Adding method type
                method: "POST",
                 
                // Adding body or contents to send
                body: JSON.stringify({ whoosasking: "mentor" , uniqid:sessionStorage.getItem("uniqid")  ,"bookingid": String(bookingid) , uname: json.bookingdetailsbyid.mentorname.fname+" "+json.bookingdetailsbyid.mentorname.lname   }),
                 
                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response =>  response.json()).then((json) => { 

                console.log(json)

                  
              if(onetimeonly == 0)
              {
                //'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImVmOTQ4MGFiLTJlYzEtNDQyNS1iZWU0LTdiNzczYzgwY2YyYSIsIm1lZXRpbmdJZCI6ImJiYmJhOGYzLWVmNGEtNDFhZS04YjZjLTVkNTFjM2VjNTUxZiIsInBhcnRpY2lwYW50SWQiOiJhYWE4MmNhMy01Mzg1LTQ2MDAtOTQ5Ni04ODNkMjcxNTcyYTYiLCJwcmVzZXRJZCI6ImI2ZGU5ODQ1LTY5MTEtNGFjZC1hMGExLThiNjM5OGY5NjQxOCIsImlhdCI6MTY3OTI5OTMyMCwiZXhwIjoxNjg3OTM5MzIwfQ.FbjEPduadvJOPZlab2nMkxO0cbGlsaL3aoSSgKNmMlmIxmMdOBRtX8QxMjGP_seNiJjS0il_hAIw3bwz187hUYCvrz_tHrzxJqGwPoKHx26nyCLagvxPs1hre50rTypwDl0cbC69lFJ9tIYC_URxk5HMIOfjNPybGc_sxnp0PoBig5IS7LsLDbvi-TH5jaBPMhynKOANR0ahDkURN8s5-daHSzzfXiwMqJHMNOlJ6spaDHfsbdoJKkTPI8nB5VAeLI0fEmoQ7qgPAx5MRUzYAJ9ZttLlEAPQ3c9e_j2huiuzdoBG-UPPz8naRQ3o5cAf_8kzngvIfGEHRloBvk8QcQ'
               initMeeting({
                authToken: json.autht,
                defaults: {
                  audio: false,
                  video: false,
                   
                },
              });

              setonetimeonly(1)

            }


          })

             

            }




            

          
              

          
          }


          else
          {

            navigate("/dashboard");

          }
          
          




        })





         
        
       console.log("this is useeffect")
        
        
       
       }, []);



     
     

       
       
     



 
    return (
      
      <div className="mx-auto max-w-7xl px-1 sm:px-1 lg:px-1   " style={{       height:"100vh"}}>
              {meetingpageauthstate? <Headerauthenticated/> : <Header/>   } 
              
               
              <Headingforpage meetingname={bookinginfo.sessiontitle}  meetingbookedtiming={bookinginfo.weekday+" "+bookinginfo.timezone+":["+bookinginfo.fromtime+"]-["+bookinginfo.totime+"]"}  />
              <div className="      w-full   flex justify-center" style={{marginTop:"1.5%"}}>
              <h2 className="text-md   text-gray-700 " style={{display:"inline-block"}}>You are meeting  </h2>
              <h1 className="text-xl font-bold text-gray-900  " style={{display:"inline-block" , marginLeft:"5px"}}>{bookinginfo.fname+" "+bookinginfo.lname}</h1>
              
              </div>

              <div className="      w-full   flex justify-center" style={{marginBottom:"1.5%"}} >
              <p className="mt-1 truncate text-sm text-gray-500 "  style={{display:"inline" , marginTop:"0px"}}>{"Tell "+bookinginfo.fname+ " a hi on our behalf :)" }</p>
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
  