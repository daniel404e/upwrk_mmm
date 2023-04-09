import { CalendarIcon, MapPinIcon, UsersIcon, VideoCameraIcon ,ChevronDoubleRightIcon   ,CheckCircleIcon ,UserIcon ,ChatBubbleBottomCenterIcon ,ClockIcon  } from '@heroicons/react/20/solid'
import {  useState ,useEffect} from 'react'
import { Outlet, Link , redirect ,Navigate, Route, Routes, useNavigate  } from "react-router-dom";
import dayjs  from  'dayjs'
import timezoneslist from '../data/timezones.json'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime  from  'dayjs/plugin/relativeTime' 
dayjs.extend(relativeTime) 
dayjs.extend(customParseFormat)

export default function Example() {
     //const server = "https://165.232.114.169:4100"
  const server ="http://localhost:4100"
  const navigate = useNavigate();


  function calculateutctimeplusoffset( offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return   nd.toLocaleString();
}


function currentdatetimeintimezone(wantedtimezone)
{

  var offset1 =0

  timezoneslist.forEach((element,inddx) => {


    if(element.value == wantedtimezone)
    {
      offset1 = element.offset    

    }



    




    
  })


  return(calculateutctimeplusoffset(offset1))
 
}



  const [bookings,setbookings] = useState([
 
  
  ])


  useEffect(() => {


    fetch(server+"/getbookingsbyuuid", {
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify([{menteeuniqid : String(sessionStorage.getItem("uniqid"))} , {mentoruniqid: String(sessionStorage.getItem("uniqid")) }]),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
     
    // Converting to JSON
    .then(response =>  response.json())
     
    // // Displaying results to console
      .then((json) => { 
               
        var toloadupdata =[]
         

        


        json.forEach((element,index) => {

            if(element.menteeuniqid == sessionStorage.getItem("uniqid"))  
            {     
            toloadupdata.push({
                id: index,
                servicetitle: element.sessiondetails.sessiontitle,                                                                                           
                status:  (dayjs(currentdatetimeintimezone(element.menteedatetime.timezone),"M/D/YYYY, H:mm:s A" ).diff(dayjs( element.menteedatetime.fromdatetime,"DD-MM-YYYY_hh:mm A" ) ,"minute")  >= 0 && dayjs(currentdatetimeintimezone(element.menteedatetime.timezone),"M/D/YYYY, H:mm:s A" ).diff(dayjs( element.menteedatetime.todatetime,"DD-MM-YYYY_hh:mm A" ) ,"minute") <= 0)? "Join Now": (dayjs(currentdatetimeintimezone(element.menteedatetime.timezone),"M/D/YYYY, H:mm:s A" ).diff(dayjs( element.menteedatetime.fromdatetime,"DD-MM-YYYY_hh:mm A" ) ,"minute")  < 0 )? "Sheduled" : "Completed",
                sessiontype: element.sessiondetails.sessiontype,
                mentorname: element.mentorname.fname+" "+element.mentorname.lname, 
                closeDateFull: dayjs( element.menteedatetime.fromdatetime,"DD-MM-YYYY_hh:mm A").format("DD-MM-YYYY | hh:mm A") ,
                bookingidd: element.bookingid
              })
                
            }
            else if(element.mentoruniqid == sessionStorage.getItem("uniqid"))
            {

                toloadupdata.push({
                    id: index,
                    servicetitle: element.sessiondetails.sessiontitle,                                                                                           
                    status:  (dayjs(currentdatetimeintimezone(element.mentordatetime.timezone),"M/D/YYYY, H:mm:s A" ).diff(dayjs( element.mentordatetime.fromdatetime,"DD-MM-YYYY_hh:mm A" ) ,"minute")  >= 0 && dayjs(currentdatetimeintimezone(element.mentordatetime.timezone),"M/D/YYYY, H:mm:s A" ).diff(dayjs( element.mentordatetime.todatetime,"DD-MM-YYYY_hh:mm A" ) ,"minute") <= 0)? "Join Now": (dayjs(currentdatetimeintimezone(element.mentordatetime.timezone),"M/D/YYYY, H:mm:s A" ).diff(dayjs( element.mentordatetime.fromdatetime,"DD-MM-YYYY_hh:mm A" ) ,"minute")  < 0 )? "Sheduled" : "Completed",
                    sessiontype: element.sessiondetails.sessiontype,
                    mentorname: element.menteename.fname+" "+element.menteename.lname, 
                    closeDateFull: dayjs( element.mentordatetime.fromdatetime,"DD-MM-YYYY_hh:mm A").format("DD-MM-YYYY | hh:mm A") ,
                    bookingidd: element.bookingid
                  })




            }
                

            
        });



         setbookings(toloadupdata)    
        console.log(json)
         
  
      })
  
                     
    


    

   
   
  
   
   
  
  }, []);


   







  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-3 lg:px-3">
    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
    <div className="mx-auto max-w-5xl">
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {bookings.map((position) => (
          <li key={position.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium text-indigo-600">{position.servicetitle}</p>
                  <div className="ml-2 flex flex-shrink-0">
                  {  
                    (position.status == "Sheduled")?
                      <button
                              type="button"
                              className="inline-flex items-center gap-x-1.5 rounded bg-indigo-600 px-2 py-1  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              {position.status}
                              <ClockIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                      </button> 
                      : (position.status == "Join Now")?
                      <button
                               
                              type="button"
                              className="inline-flex items-center gap-x-1.5 rounded bg-yellow-400 px-2 py-1  text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                               value={position.bookingidd}
                               onClick={(e)=>{

                                console.log(e.target.value)

                                navigate("/meeting/"+ e.target.value);

                                
                                     


                               }}


                               >
                              {position.status}
                              <ChevronDoubleRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                              
                      </button>  : <button
                              type="button"
                              className="inline-flex items-center gap-x-1.5 rounded bg-green-500 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100"
                            >
                          
                              {position.status}
                              <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                      </button>
                  }
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <UserIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      {position.mentorname}
                    </p>
                  {
                    (position.sessiontype == "Text Message Conferencing")?  <p className="mt-2 flex items-center text-sm text-gray-500 sm:ml-6 sm:mt-0">
                      <ChatBubbleBottomCenterIcon   className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      {position.sessiontype}
                    </p> :  <p className="mt-2 flex items-center text-sm text-gray-500 sm:ml-6 sm:mt-0">
                      <VideoCameraIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      {position.sessiontype}
                    </p>
                  }
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <p>
                         {position.closeDateFull} 
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  )
}
