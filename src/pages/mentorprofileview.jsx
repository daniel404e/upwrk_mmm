import { Outlet, Link } from "react-router-dom";
import React, { useState , useEffect ,Fragment, useRef} from 'react';
import { useParams } from "react-router";
import { VideoCameraIcon ,ChatBubbleBottomCenterIcon  , PhotoIcon, UserCircleIcon,CheckIcon, ChevronUpDownIcon  ,XMarkIcon ,EnvelopeIcon , CheckCircleIcon ,CalendarIcon, MapPinIcon, UsersIcon} from "@heroicons/react/24/solid";
import { Dialog, Transition ,Combobox} from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon  } from '@heroicons/react/20/solid'
import timezoneslist from '../data/timezones.json'
 import dayjs  from  'dayjs'

 import customParseFormat from 'dayjs/plugin/customParseFormat'
 import relativeTime  from  'dayjs/plugin/relativeTime'
 
 dayjs.extend(relativeTime)

 dayjs.extend(customParseFormat)





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const datesarray =[]
const selectedmatrix =[]

for (let index = 0; index < 20; index++) { //for 20 days from now

  const date1 = new Date();
  date1.setDate(date1.getDate() + index);

  datesarray.push({id:index, month:month[date1.getMonth()],monthinno:date1.getMonth()  , year:date1.getFullYear() ,day:date1.getDate() , weekday:weekday[date1.getDay()] ,date:date1.toLocaleDateString() })
  if(index == 0)
  {
  selectedmatrix.push({id:index, selected:true})
  
  }
  else{
    selectedmatrix.push({id:index, selected:false})
    
  }
  
}




console.log(datesarray)


 


function Mentorprofileviewpage() {
  const [selectedmatrixstate,setselectedmatrixstate] = useState(selectedmatrix)
  const [modaltitle2,              setmodaltitle2] = useState("");
  const [modalcontent2,            setmodalcontent2] = useState([]);
  const[modalserviceid , setmodalserviceid] = useState(0);
  const[selectedtzone , setselectedtzone] = useState("");
  const[mentortzone , setmentortzone] = useState("");
  const[selectedtimebutton , setselectedtimebutton] = useState(null);
  const[selectedtimebuttonvalue , setselectedtimebuttonvalue] = useState(null);
  const[currentopenserviceforknowmore ,setcurrentopenserviceforknowmore] = useState(null);
  //const server = "https://165.232.114.169:4100"
  const server ="http://localhost:4100"

  const [services, setservices] = useState([ 
    
    {id:0,servicetitle:"1:1 Meet With ME",typeofservice:"Video Conferencing",durationinminutes:"45 Min",priceofservice:"999",contentofservice:"Get a 1:1 meeting with me now. " ,currencyofservice:"INR",currencysymbol:"\u20B9" ,imgscr:"https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" ,imagesrcfileid:""  },
  
  
  ])

  const [avaliablitystate,setavaliablitystate] = useState({})
  const [open, setOpen] = useState(false)

  const [open2, setOpen2] = useState(false)

  const cancelButtonRef = useRef(null)
  const cancelButtonRef2 = useRef(null)

  function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
  }
 
  const [modelimgscr,             setmodelimgscr] = useState("")
  const [modeltitle,              setmodeltitle] = useState("");
  const [modelcontent,            setmodelcontent] = useState('');
  const [modeltypeofservice,      setmodeltypeofservice] = useState('');
  const [modeldurationofservice,  setmodeldurationofservice] = useState('');
 
  let { profileuniqid } = useParams();

  console.log(profileuniqid)





  let scrl = useRef(null);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
  };
 


    
 


  useEffect(() => {


   
    
  
    

    
    fetch(server+"/getdetailsbyuniqid", {
     
      // Adding method type
      method: "POST",
       
      // Adding body or contents to send
      body: JSON.stringify({Uniqid : String(profileuniqid)}),
       
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

    
      setservices(json[0].avaliablityandlistedservices.serviceslisted)
      setavaliablitystate(json[0].avaliablityandlistedservices.avaliablityandtimezone.weeklyavaliablity)
      setmentortzone(json[0].avaliablityandlistedservices.avaliablityandtimezone.timezonedata.value) 
      setselectedtzone(json[0].avaliablityandlistedservices.avaliablityandtimezone.timezonedata.value)  
      console.log(json[0].avaliablityandlistedservices.avaliablityandtimezone.weeklyavaliablity)


      
    })
 


  },[])


  function  convertavaliablitytotimezone(weeklyavaliablity ,mentorprofiletimezone ,choosentimezone)
  {
  
  
  var convertedweeklyavaliablity =[
    {
    "id": 1,
    "title": "Saturday",
    "avaliablity": [
        
    ],
    "avaliable": true
  },
  {
    "id": 2,
    "title": "Sunday",
    "avaliablity": [
        
    ],
    "avaliable": true
  },
  {
    "id": 3,
    "title": "Monday",
    "avaliablity": [  ],
    "avaliable": true
  },
  {
    "id": 4,
    "title": "Tuesday",
    "avaliablity": [
         
    ],
    "avaliable": true
  },
  {
    "id": 5,
    "title": "Wednesday",
    "avaliablity": [
        
    ],
    "avaliable": true
  },
  {
    "id": 6,
    "title": "Thursday",
    "avaliablity": [
       
    ],
    "avaliable": true
  },
  {
    "id": 7,
    "title": "Friday",
    "avaliablity": [
      
    ],
    "avaliable": true
  }
  ]
  
  
  
  
  
  function findoffsetbetweentimezones(mentorprofiletzne,choosentzne)
  {
  
    
    var  offset=0;
    timezoneslist.forEach((element,index) => {
           
     
                 
          if(element.value == mentorprofiletzne)
          {
            offset = offset+ ( element.offset * (-1))
  
          }
  
          if(element.value == choosentzne)
          {
            offset = offset + element.offset 
  
          }
                  
  
      
                            });
  
  
  
                            return(offset)
  
  
  
  
                          }
  
  
  
            const  totaloffset=  findoffsetbetweentimezones(mentorprofiletimezone,choosentimezone) 
             const totaloffsetinminutes = totaloffset *60
             console.log("offset: "+totaloffsetinminutes )
  
  
             if(totaloffset < 0) //if totaloffset is negative
             {
  
              weeklyavaliablity.forEach((element,index) => {  //index goes 0-6
                        
              //  if(element.avaliable)
                
                    element.avaliablity.forEach((elem,indx)=>{
  
                       
                      var durfrom12amforfromtime =   dayjs( elem.fromtime, "hh:mm-a"  ).diff(dayjs( "12:00 am", "hh:mm-a"  ), 'minute')
                      var  durfrom12amfortotime =   dayjs( elem.totime, "hh:mm-a"  ).diff(dayjs( "12:00 am", "hh:mm-a"  ), 'minute')
                        
                      if ((totaloffsetinminutes*(-1))  > durfrom12amforfromtime && totaloffsetinminutes*(-1)  > durfrom12amfortotime )
                      {   
                      
                       var convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  
  
                       var convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  
                      
                      var idtoinsert = element.id - 1
  
                      if(idtoinsert == 0)
                      {
                        idtoinsert = 7
  
                      }
  
                      if(element.avaliable)
                      {   
                      convertedweeklyavaliablity[idtoinsert - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": convertedtotime })
                        
                       
                      }
  
                      
                      console.log("complete time chunk needs to be shifted")
                      }
  
                      else if ((totaloffsetinminutes*(-1))  > durfrom12amforfromtime && totaloffsetinminutes*(-1)  <  durfrom12amfortotime)
                      {
  
                        var convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  
  
                        var convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  
                       
                       var idtoinsertforfrom = element.id - 1
                       var idtoinsertforto =  element.id 
                       if(idtoinsertforfrom == 0)
                       {
                        idtoinsertforfrom = 7
   
                       }
   
                       if(element.avaliable)
                       { 
                       convertedweeklyavaliablity[idtoinsertforfrom - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": "11:59 pm" })
                       convertedweeklyavaliablity[idtoinsertforto -1 ].avaliablity.push({ "fromtime": "12:00 am", "totime": convertedtotime })
                         
                       
                      
                      }
  
                            
                        console.log("  time chunk needs to be parted and shifted")
  
                      }
                      else if ((totaloffsetinminutes*(-1))  < durfrom12amforfromtime && totaloffsetinminutes*(-1)  <  durfrom12amfortotime)
                      {
  
                        const convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  
  
                        const convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  
                       
                       const idtoinsert = element.id  
   
                        
                          
                       if(element.avaliable)
                       { 
   
                       convertedweeklyavaliablity[idtoinsert - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": convertedtotime })
                       
                      }


                        console.log("  no shifting needed just subtract offset")
  
                      }
  
  
  
  
                    })
               
                          
  
  
              })
  
  
  
  
  
                 
             }
  
             else if (totaloffset > 0) //if totaloffset is positive
             {
                   
              weeklyavaliablity.forEach((element,index) => {  //index goes 0-6
                        
              
                    element.avaliablity.forEach((elem,indx)=>{
  
                       
                      var durfrom12amforfromtime =   dayjs( "11:59 pm", "hh:mm-a"  ).diff(dayjs( elem.fromtime, "hh:mm-a"  ), 'minute')
                      var  durfrom12amfortotime =   dayjs( "11:59 pm", "hh:mm-a"  ).diff(dayjs( elem.totime, "hh:mm-a"  ), 'minute')
                        console.log("duration: "+durfrom12amforfromtime +" "+ durfrom12amfortotime)
                      if ((totaloffsetinminutes)  > durfrom12amforfromtime && totaloffsetinminutes   > durfrom12amfortotime )
                      {   
                      
                       var convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  
  
                       var convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  
                      
                      var idtoinsert = element.id + 1
  
                      if(idtoinsert == 8)
                      {
                        idtoinsert = 1
  
                      }
  
                      if(element.avaliable)
                      { 
                      convertedweeklyavaliablity[idtoinsert - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": convertedtotime })
                      }
  
                      
                      console.log("complete time chunk needs to be shifted")
                      }
  
                      else if ((totaloffsetinminutes)  < durfrom12amforfromtime && totaloffsetinminutes  >  durfrom12amfortotime)
                      {
  
                        var convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  
  
                        var convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  
                       
                       var idtoinsertforfrom = element.id 
                       var idtoinsertforto =  element.id + 1 
                       if(idtoinsertforto == 8)
                       {
                        idtoinsertforto = 1
   
                       }
   
                       if(element.avaliable)
                       { 
                       convertedweeklyavaliablity[idtoinsertforfrom - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": "11:59 pm" })
                       convertedweeklyavaliablity[idtoinsertforto -1 ].avaliablity.push({ "fromtime": "12:00 am", "totime": convertedtotime })
                       }
  
                            
                        console.log("  time chunk needs to be parted and shifted")
  
                      }
                      else if ((totaloffsetinminutes)  < durfrom12amforfromtime && totaloffsetinminutes  <  durfrom12amfortotime)
                      {
  
                        const convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  
  
                        const convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  
                       
                       const idtoinsert = element.id  
   
                        
   
                       if(element.avaliable)
                       { 
                       convertedweeklyavaliablity[idtoinsert - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": convertedtotime })
                       }

                        console.log("  no shifting needed just subtract offset")
  
                      }
  
  
  
  
                    })
                 
                          
  
  
              })
  
             }
  
  
             else if(totaloffset == 0)
             {
            
            
              weeklyavaliablity.forEach((element,index) => {  //index goes 0-6
                        
              if(element.avaliable)
              {
                
                 
                  convertedweeklyavaliablity[index] = weeklyavaliablity[index]
               
               
                

              }
              
              
              
              })
            
              
             
            
            
            
            }
  
  
  
  
             return(convertedweeklyavaliablity)
  
            }



          


  




    return (
      <div>
      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-gray-50 px-4 pt-5 pb-4 transform overflow-hidden rounded-lg    shadow-xl lg:w-3/6 xl:w-3/6  sm:w-full md:w-4/6  transition-all sm:my-8     sm:p-6"  >
                
              <div className="absolute top-0 right-0   pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-gray-50 text-gray-400 hover:text-red-500  "
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div        >
                 
      <div className="space-y-12">
        <div className="  pb-3">
          
           

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


            <div className="col-span-full "  >
               
              <div className="mt-2 relative flex justify-center overflow-hidden" style={{ width:"100%" , height:"300px"}}>
                <div className="flex rounded-md   shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                  
                 <img className="rounded-lg" src={modelimgscr}       />
                </div>
              </div>
            </div>

            <div className="col-span-full  ">
            <div className='relative flex drop-shadow-xl justify-center'>
            <h2 className="text-xl mt-5 text-justify  font-semibold leading-7 text-gray-900">{modeltitle}</h2>
              
              </div>
             { (modelcontent)? <div className='relative mt-2 flex drop-shadow-sm justify-center'>
              <div className=" bg-white text-justify relative flex  justify-center p-6 rounded-lg shadow-sm"  style={{width:"96%"}}>
               <p  className=" text-justify text-md leading-6  relative text-gray-600" >{modelcontent} </p>
              </div>
              </div> :null
             }
              
            </div>

          
            
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-10">
       
          

          <div className="mt-0 grid grid-cols-1 gap-y-8   sm:grid-cols-6">

          
            <div className="sm:col-span-3">
              <h1   className="block text-sm font-medium leading-6 text-gray-900" style={{display:"inline-block"}}>
                Type of Meeting
              </h1>
              <span className="ml-2 inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
        <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
          <circle cx={4} cy={4} r={3} />
        </svg>
        {modeltypeofservice}
      </span>
            </div>

            <div className="sm:col-span-3">
              <h1 htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900" style={{display:"inline-block"}}>
                Duration
              </h1>
              <span className="ml-2 inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
        <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
          <circle cx={4} cy={4} r={3} />
        </svg>
        {modeldurationofservice}
      </span>
            </div>


            <div className="col-span-full">
            <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                 ///////////////////////////////////////////////       
                    key={currentopenserviceforknowmore}
                    id={currentopenserviceforknowmore}

                     ///////////////////////////////////////////////////
                    
                    onClick={(e)=>{
                      var  indexweneed=0;

            selectedmatrixstate.forEach((element,index) => {
                      
                      if(element.selected)
                      {
                        indexweneed = index  

                      }
                                     });
                       
                       var  selectedday = datesarray[indexweneed].weekday
                         
                       var indexweneed2=null;
                       avaliablitystate.forEach((element,index) => {

                              if(String(element.title).toLowerCase() == String(selectedday).toLowerCase() )
                              {   
                                     indexweneed2 = index
                                   
                              }
  
                                      });

                          var selectedweekdayavaliablity = convertavaliablitytotimezone(avaliablitystate, mentortzone , selectedtzone)[indexweneed2]
                          console.log(selectedweekdayavaliablity)
                       var dateanddetails = datesarray[indexweneed]
                                                          


                       
                      const durationofss = Number(services[e.target.id].durationinminutes.slice(0, -3)) //duration of selected service
                      const timechunks =[]
                                 
                                
                      selectedweekdayavaliablity.avaliablity.forEach((element,index ) => {
                                   console.log(element.fromtime +" "+ element.totime)
                                
                                const durationofavaliablity =   dayjs( element.totime, "hh:mm-a"  ).diff(dayjs( element.fromtime, "hh:mm-a"  ), 'minute') 
                                       
                                   const noftchunks = Math.floor(durationofavaliablity/durationofss)

                                   
                                    
                                   for (let index = 0; index < noftchunks; index++) {

                                     timechunks.push(String(dayjs( element.fromtime, "hh:mm-a"  ).add(durationofss * index , 'minute').format('hh:mm A')))
                                                     
                                              
                                    
                                             }

                                            

                               
                                
                                                             });
                              
                                                             console.log(timechunks)


                       
                      setmodalcontent2(timechunks  )
                   
                      

                      console.log("this is model cont " + timechunks)
                      
                      setmodalserviceid(e.target.id)
                      setmodaltitle2(String(dateanddetails.weekday +" "+ dayjs( dateanddetails.date, "M/D/YYYY").format("DD-MM-YYYY")))
                      setselectedtimebutton(null)
                      setselectedtimebuttonvalue(null)
                      setOpen2(true)
                      
                    }}
                        

                     ///////////////////////////////////////////////////   
                        
                        
                          >
                    Book Now
                  </button>
            </div>

            

           
           
        

            

            
          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
         
      </div>
     
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

{/*     
///////////////////////////////////////////////////book now dialogue panel///////////////////////////////////////////////////////////////// */}

    <Transition.Root show={open2} as={Fragment}>   
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef2} onClose={setOpen2}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-gray-50 px-4 pt-5 pb-4 transform overflow-hidden rounded-lg    shadow-xl lg:w-3/6 xl:w-3/6  sm:w-full md:w-4/6  transition-all sm:my-8     sm:p-6">
               
              <div className="absolute top-0 right-0   pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-gray-50 text-gray-400 hover:text-red-500  "
                    onClick={() => setOpen2(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div>
                <div className="space-y-12">
        <div className="  pb-3">
          
           

          <div className="mt-5 grid grid-cols-1 gap-x-6  sm:grid-cols-6"  >


            <div className="col-span-full "  >
               
                 {/* ///////////////////////////////////////////////// */}
                       
                 <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <div className="sm:flex-auto ">
          <h1 className="text-base text-xl font-semibold leading-6 text-gray-900">{String(services[modalserviceid].servicetitle)}</h1>
          <h2 className="text-md  mt-1  text-justify  text-gray-500" style={{display:"inline-block"}}>{modaltitle2}</h2>
        </div>
        
      </div>   
           
           <div className="relative flex justify-center">

           <button className="hover:opacity-60"
      onClick={() => slide(-80)}  
      >
           <ChevronLeftIcon className="h-7 w-7 text-gray-500  ml-8 " style={{	marginTop:"52px" , marginBottom:"52px"}}  />
       </button>
          
      <div className="mt-8 flow-root " style={{ width: "93%"}}>
        <div className="  -my-2   " ref={scrl}  style={{ height: "85px" ,overflowX: "hidden" , width: "100%"  }} >
          <div className="inline-block min-w-full overflow-auto py-2 align-middle  " >
            <table className="min-w-full divide-y divide-gray-300" >
              
              <tbody className="divide-y divide-gray-200  bg-gray-50"  >
                 
                  <tr key="1" className="divide-x divide-gray-200" >
                    <td  className="whitespace-nowrap  rounded-xl py-4 pl-4 pr-4 text-sm font-medium text-gray-900  "  >
                        
          {   

            datesarray.map((datea,index)=>(
                 

                          <button
                          key={index}
                             type="button"
                             monthinnumber={datea.monthinno} 
                             dayinnumber={datea.day}
                             dayname={datea.weekday}
                             id={index}
                             className ={ (selectedmatrixstate[index].selected )?   "transition-all   duration-500 rounded-md bg-indigo-50 px-3 py-2 mr-1  text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100" : "transition-all   duration-500 rounded-md mr-1 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                       
                                       }
                             onClick={(e)=>{

                             

                             
                              
                               const tempuhh =   selectedmatrixstate
                                
                               tempuhh.forEach((element,index1) => {
                                          tempuhh[index1].selected=false
                                           });

                              tempuhh[e.target.id].selected=true


                               setselectedmatrixstate([...tempuhh])

                               var  indexweneed=0;

            selectedmatrixstate.forEach((element,index) => {
                      
                      if(element.selected)
                      {
                        indexweneed = index  

                      }
                                     });
                       
                       var  selectedday = datesarray[indexweneed].weekday
                         
                       var indexweneed2=null;
                       avaliablitystate.forEach((element,index) => {

                              if(String(element.title).toLowerCase() == String(selectedday).toLowerCase() )
                              {   
                                     indexweneed2 = index
                                   
                              }
  
                                      });

                      // var selectedweekdayavaliablity = avaliablitystate[indexweneed2]
                       var selectedweekdayavaliablity = convertavaliablitytotimezone(avaliablitystate, mentortzone , selectedtzone)[indexweneed2]
                       var dateanddetails = datesarray[indexweneed]
                                                          


                      

                      const durationofss = Number(services[modalserviceid].durationinminutes.slice(0, -3)) //duration of selected service
                      const timechunks =[]
                                 
                                
                      selectedweekdayavaliablity.avaliablity.forEach((element,index ) => {
                                   console.log(element.fromtime +" "+ element.totime)
                                
                                const durationofavaliablity =   dayjs( element.totime, "hh:mm-a"  ).diff(dayjs( element.fromtime, "hh:mm-a"  ), 'minute') 
                                       
                                   const noftchunks = Math.floor(durationofavaliablity/durationofss)

                                   
                                    
                                   for (let index = 0; index < noftchunks; index++) {

                                     timechunks.push(String(dayjs( element.fromtime, "hh:mm-a"  ).add(durationofss * index , 'minute').format('hh:mm A')))
                                                     
                                              
                                    
                                             }

                                            

                               
                                
                                                             });
                              
                                                             console.log(timechunks.length)

                           
                      setmodalcontent2(timechunks  )
                     
                      console.log("this is model cont " + timechunks)

                      setmodaltitle2(String(dateanddetails.weekday +" "+ dayjs( dateanddetails.date, "M/D/YYYY").format("DD-MM-YYYY")))

                      setselectedtimebutton(null)
                      setselectedtimebuttonvalue(null)

                               
                              
                              }
                              
                              
                              }


                                   >
                             {limit(datea.month,3) +" "+ datea.day }
                           
                           
                           </button>

                           
                           
                  
          ))}
                    
        
                  
                    </td>

                    
                  
                     
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button className="hover:opacity-60"
      onClick={() => slide(+80)}  
      >
      <ChevronRightIcon className="h-7 w-7 text-gray-500   mr-8" style={{	marginTop:"52px" , marginBottom:"52px"}}  />
      </button>
      </div>
    </div>
           
           {/* //////////////////////////////////////////////////////// */}
            </div>

            <div className="col-span-full   ">
            <div className='  relative   flex drop-shadow-sm justify-center mb-2'>
              <div className="   flex justify-start   rounded-lg    "  style={{width:"75%"}}>
       <div  style={{width:"250px"}}> 
      <select
        id="location"
        name="location"
        className="  block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={selectedtzone}
        style={{display:"inline-block"}}
        onChange={(e)=>{ 
          //e.target.value
          var  indexweneed=0;

selectedmatrixstate.forEach((element,index) => {
          
          if(element.selected)
          {
            indexweneed = index  

          }
                         });
           
           var  selectedday = datesarray[indexweneed].weekday
             
           var indexweneed2=null;
           avaliablitystate.forEach((element,index) => {

                  if(String(element.title).toLowerCase() == String(selectedday).toLowerCase() )
                  {   
                         indexweneed2 = index
                       
                  }

                          });
          var selectedweekdayavaliablity = convertavaliablitytotimezone(avaliablitystate, mentortzone , e.target.value)[indexweneed2]
          const durationofss = Number(services[modalserviceid].durationinminutes.slice(0, -3)) //duration of selected service
                      const timechunks =[]
                                 
                                
                      selectedweekdayavaliablity.avaliablity.forEach((element,index ) => {
                                   console.log(element.fromtime +" "+ element.totime)
                                
                                const durationofavaliablity =   dayjs( element.totime, "hh:mm-a"  ).diff(dayjs( element.fromtime, "hh:mm-a"  ), 'minute') 
                                       
                                   const noftchunks = Math.floor(durationofavaliablity/durationofss)

                                   
                                    
                                   for (let index = 0; index < noftchunks; index++) {

                                     timechunks.push(String(dayjs( element.fromtime, "hh:mm-a"  ).add(durationofss * index , 'minute').format('hh:mm A')))
                                                     
                                              
                                    
                                             }

                                            

                               
                                
                                                             });
                              
                                                             console.log(timechunks)

  
                      setmodalcontent2(timechunks  )
                      


                      console.log("this is model cont " + timechunks)
                      console.log(timechunks)
                      setselectedtzone(e.target.value)
                      setselectedtimebutton(null)
                      setselectedtimebuttonvalue(null)
          
          
          
          }}
      >
      {
        timezoneslist.map((element,indxz)=>(
        
        <option key={element.value+element.abbr}>{element.value}</option>
        


      ))}
      
      </select>
      </div>
    </div>

           
              
              </div>
             <div className='relative   flex drop-shadow-sm justify-center'>
              <div className=" bg-white overflow-hidden rounded-lg bg-white shadow"  style={{width:"75%"}}>
              <div className="px-4 py-5 sm:p-6">
           {   (modalcontent2.length > 0) ?  
               
                modalcontent2.map((elementz,indxz)=>(
                     
                   
                    <button
        type="button"
        id={indxz}
        key={indxz}
        disabled={ (dayjs( elementz, "hh:mm A"  ).diff( dayjs( String(new Date().toLocaleTimeString(undefined, { hour:   '2-digit', minute: '2-digit'})), "hh:mm A"  ) , 'minute') < 30 && selectedmatrixstate[0].selected == true  )? true : false}
        className={(dayjs( elementz, "hh:mm A"  ).diff( dayjs( String(new Date().toLocaleTimeString(undefined, { hour:   '2-digit', minute: '2-digit'})), "hh:mm A"  ) , 'minute') < 30  && selectedmatrixstate[0].selected == true )?   "opacity-50 transition-all   duration-300 rounded-full bg-white mx-1 my-1 px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 hover:bg-red-100" : (selectedtimebutton == indxz )? "rounded-full transition-all   duration-3 00 bg-green-400 mx-1 my-1 px-2.5 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-green-300     " : "rounded-full transition-all   duration-500 bg-white mx-1 my-1 px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-green-50 focus:bg-green-500 " }
           value={elementz}
           onClick={(e)=>{
            

            setselectedtimebutton(e.target.id)
            setselectedtimebuttonvalue(e.target.value)

            
           
            
            
            }}

            >
       {elementz}
      </button>
                )) : (  <button  type="button" disabled={true} className="opacity-50 rounded-lg bg-white mx-1 my-1 px-2.5 py-1 text-md font-semibold text-red-900 shadow-sm ring-1 ring-inset ring-red-500 hover:bg-red-100"> Sorry all Booked</button>)
           
           }
               </div>
              </div>
              </div> 
             
              
            </div>

          
            
          </div>
        </div>

        <div className="border-b border-gray-900/10  pb-5" style={ {marginTop: "12px"}}>
           
          

          <div className="mt-0 grid grid-cols-1 gap-y-8   sm:grid-cols-6">
                      
          <div className="sm:col-span-3">
               
              <span className="  inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
        <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
          <circle cx={4} cy={4} r={3} />
        </svg>
        {services[modalserviceid].durationinminutes}
        
      </span>
            </div>

            <div className="sm:col-span-3">
              
              <span className="  inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
        <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
          <circle cx={4} cy={4} r={3} />
        </svg>
        {services[modalserviceid].typeofservice}
      </span>
            </div>


            <div className="col-span-3 flex relative justify-center">
            <div  className="flex relative w-full justify-center">
              
              <span className="   inline-flex justify-center rounded-md mr-14 ml-14 w-full items-center rounded-md bg-green-100   py-0.5 text-md font-medium text-green-800">
         
        { services[modalserviceid].currencysymbol+" " + services[modalserviceid].priceofservice}
      </span>
      </div>
            </div>

          
           


            <div className="col-span-3">
            <button
                    type="submit"
                    className= {(selectedtimebutton != null)? " motion-safe:animate-pulse inline-flex w-full justify-center rounded-md bg-green-400 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" : "  inline-flex w-full justify-center rounded-md bg-green-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"  }
                    disabled={(selectedtimebuttonvalue != null)? false : true  }
                    onClick={()=>{
                                     
                                     console.log(selectedtimebuttonvalue)



                      
                    }}


                    
                     >
                    Pay
                  </button>
            </div>

            

           
           
        

            

            
          </div>
        </div>

        {/* setOpen2(false) */}
      </div>
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7 xl">
        <div>


        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:grid-cols-2">
      {/* {people.map((person) => ( */}
        
           

      {services.map((service,serviceid)=>(

           <div key={service.id}  className="relative hover:scale-105 hover:shadow-2xl transition-all duration-300  md:col-span-1 max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" style={{height:"310px" ,width:"280px"} }   >
                   
          
   
   <div style={{height:"60px" ,width:"100%"} }   className="overflow-hidden  hover:scale-y-150   ">
    <a >
        <img   className="rounded-t-lg  " src={service.imgscr} alt="" />
    </a>
    </div>
     
    <div className="pt-5  pl-5 pr-5 pb-2  overflow-auto  "  style={{width:"278px",height:"200px"}}  >
        <a href="#">
            <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{service.servicetitle}</h5>
        </a>
        {
          (service.typeofservice == "Video Conferencing")? 
        <span className="inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-sm font-medium text-purple-800">
         <h2 className='font-semibold'> <VideoCameraIcon style={{display:"inline-block"}} className="h-5 w-5 text-gray-500" /> {service.durationinminutes}</h2>
          </span>:<span className="inline-flex items-center rounded-md bg-yellow-100 px-2.5 py-0.5 text-sm font-medium text-yellow-800">
          <h2 className='font-semibold'> <ChatBubbleBottomCenterIcon   style={{display:"inline-block"}} className="h-5 w-5 text-gray-500" /> {service.durationinminutes}</h2>
      </span>

        }

         <span className="inline-flex items-center rounded-lg bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"  style={{marginLeft:"10px"}}>
               <h2 className='font-semibold ' style={{fontSize:"15px"}}>{service.currencysymbol}</h2>      <h2 className='font-semibold text-md'>  { service.priceofservice} </h2>
      </span>
        
        {
            (service.contentofservice.length > 150)? <p   className="mb-1 mt-2 font-normal text-gray-700 dark:text-gray-400  ">{ limit(service.contentofservice,70) +"..." }</p>:<p   className="mb-3 font-normal text-gray-700 dark:text-gray-400  ">{ limit(service.contentofservice,150)   }</p>


        }
  
    </div>
    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 rounded-md   " style={{position:"absolute", bottom:"0" , width:"100%"}}>
                  
                           
 



                   <button  style={{position:"absolute",  left:"25px"  }}
                    type="submit"
                    value={serviceid}
                    className="inline-flex justify-start rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    onClick={(e) =>{    

                      
                       
                     
                      setmodelimgscr (services[e.target.value].imgscr)  
                      setmodeltitle (services[e.target.value].servicetitle)   
                       setmodelcontent (services[e.target.value].contentofservice)   
                       setmodeltypeofservice (services[e.target.value].typeofservice) 
                      setmodeldurationofservice (services[e.target.value].durationinminutes)
                      
                      console.log(services[e.target.value])
                      setcurrentopenserviceforknowmore(e.target.value)      
                      setOpen(true)
                                 
                             
                             console.log(e.target.value)


                      } }  
                       >
                    Know More
                  </button>
                  
                  
                  <button

                    type="submit"
                    className="inline-flex justify-end rounded-md bg-green-600 py-2 px-10 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    key={service.id}
                    id={service.id}
                    onClick={(e)=>{
                      var  indexweneed=0;

            selectedmatrixstate.forEach((element,index) => {
                      
                      if(element.selected)
                      {
                        indexweneed = index  

                      }
                                     });
                       
                       var  selectedday = datesarray[indexweneed].weekday
                         
                       var indexweneed2=null;
                       avaliablitystate.forEach((element,index) => {

                              if(String(element.title).toLowerCase() == String(selectedday).toLowerCase() )
                              {   
                                     indexweneed2 = index
                                   
                              }
  
                                      });

                          var selectedweekdayavaliablity = convertavaliablitytotimezone(avaliablitystate, mentortzone , selectedtzone)[indexweneed2]
                          console.log(selectedweekdayavaliablity)
                       var dateanddetails = datesarray[indexweneed]
                                                          


                       
                      const durationofss = Number(services[e.target.id].durationinminutes.slice(0, -3)) //duration of selected service
                      const timechunks =[]
                                 
                                
                      selectedweekdayavaliablity.avaliablity.forEach((element,index ) => {
                                   console.log(element.fromtime +" "+ element.totime)
                                
                                const durationofavaliablity =   dayjs( element.totime, "hh:mm-a"  ).diff(dayjs( element.fromtime, "hh:mm-a"  ), 'minute') 
                                       
                                   const noftchunks = Math.floor(durationofavaliablity/durationofss)

                                   
                                    
                                   for (let index = 0; index < noftchunks; index++) {

                                     timechunks.push(String(dayjs( element.fromtime, "hh:mm-a"  ).add(durationofss * index , 'minute').format('hh:mm A')))
                                                     
                                              
                                    
                                             }

                                            

                               
                                
                                                             });
                              
                                                             console.log(timechunks)


                       
                      setmodalcontent2(timechunks  )
                   
                      

                      console.log("this is model cont " + timechunks)
                      
                      setmodalserviceid(e.target.id)
                      setmodaltitle2(String(dateanddetails.weekday +" "+ dayjs( dateanddetails.date, "M/D/YYYY").format("DD-MM-YYYY")))
                      setselectedtimebutton(null)
                      setselectedtimebuttonvalue(null)
                      setOpen2(true)
                      
                    }}
                    
                    >
                    Book
                  </button>
                </div>
</div>






 
      ))}



{/* setOpen(true) */}
      {/* ))} */}
    </div>



        <h1>Mentor Profile </h1>
         
          
          
             
          
          
        </div>
        <div>
         <h2> Mentor Details </h2>
        </div>
        <div>
         <h2> Education Qualifications </h2>
        </div>
        <div>
         <h2> Reviews </h2>
        </div>
        <div>
         <h2> Socials </h2>
        </div>
        <div>
         <h2> Packages / Services offered  </h2>
        </div>
        <div>
         <h2> Avaliable dates and time   </h2>
        </div>

        <div >
          <button style={{marginRight:"10px"}} > Book session/meating on date.time  </button> 
           
        </div>
        <div >
        <button style={{marginRight:"10px"}} > Back </button> 
        
        </div>
         
         </div>
      </div>
      </div>
    )
  }
  
  export default Mentorprofileviewpage
  