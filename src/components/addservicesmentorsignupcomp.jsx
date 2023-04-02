import React, { useState , useEffect ,Fragment, useRef} from 'react';
import countries from '../data/countries.json'
import timezoneslist from '../data/timezones.json'
import timeinday from "../data/timeinday.json"
import currencydata from '../data/currency.json'
import { toast, ToastContainer } from 'react-toastify';
import { VideoCameraIcon ,ChatBubbleBottomCenterIcon  , PhotoIcon, UserCircleIcon,CheckIcon, ChevronUpDownIcon  ,XMarkIcon ,EnvelopeIcon , CheckCircleIcon ,CalendarIcon, MapPinIcon, UsersIcon} from "@heroicons/react/24/solid";
import { PlusIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { Dialog, Transition ,Combobox} from '@headlessui/react'
 
import  axios from 'axios'


//toadd/change---1) prevent overlap in date timeframe
//               2)prevent negative date timeframe selection 

 

const people =  timezoneslist

 


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
 



 function addservices(props)
 {


  useEffect(() => {
    window.scrollTo(0,0)
  },[])



   const [query, setQuery] = useState('')
  const [selectedtimezone, setselectedtimezone] = useState(null)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.value.toLowerCase().includes(query.toLowerCase())
        })







  const [modelimgscr,             setmodelimgscr] = useState("")
  const [modeltitle,              setmodeltitle] = useState("");
  const [modelcontent,            setmodelcontent] = useState('');
  const [modeltypeofservice,      setmodeltypeofservice] = useState('');
  const [modeldurationofservice,  setmodeldurationofservice] = useState('');




  var defaultdropdownvalue= [
  {fromtime:"" , totime:"" },
  {fromtime:"" , totime:"" },
  {fromtime:"" , totime:"" },
  {fromtime:"" , totime:"" },
  {fromtime:"" , totime:"" },
  {fromtime:"" , totime:"" },
  {fromtime:"" , totime:"" }
 
 ]

 var  dropdownsval=  defaultdropdownvalue



     function handledropdownvaluechange(idtoget,valuetochange)
     {
         const whichdrpdown = Math.floor(idtoget/10)
             
         if(whichdrpdown == 1)
         {
            const idtochange= idtoget-10
          dropdownsval[idtochange-1].fromtime=valuetochange

         }

         if(whichdrpdown == 2)
         {
          const idtochange= idtoget-20
          dropdownsval[idtochange-1].totime=valuetochange

         }



         console.log(dropdownsval)




     }
         
      function handledeleteavaliablitytime(indexofarray,idofarray)
      {



        const toloaddatum1 =  avaliablitystate

           
          toloaddatum1[idofarray-1].avaliablity.splice( indexofarray,1)
           
       
           
          setavaliablitystate([...toloaddatum1])







      }

      

  



  const [avaliablitystate , setavaliablitystate] = useState( [
    {
      id: 1,
      title: 'Saturday',
      
      avaliablity:[    ],
      avaliable: true
   
    },
    {
      id: 2,
      title: 'Sunday',
      
      avaliablity:[    ],
      avaliable: true
   
    },
    {
      id: 3,
      title: 'Monday',
       
      avaliablity:[    ] ,
      avaliable: true
     
    },
    {
      id: 4,
      title: 'Tuesday',
       
      avaliablity:[    ],
      avaliable: true
   
    },
    {
      id: 5,
      title: 'Wednesday',
       
      avaliablity:[   ],
      avaliable: true
     
    },
    {
      id: 6,
      title: 'Thursday',
       
      avaliablity:[    ],
      avaliable: true
     
    },
    {
      id: 7,
      title: 'Friday',
      
      avaliablity:[   ],
      avaliable: true
   
    },
   
  ]
  )

  function handleapplytoall(idtoapplyall)
  {
    const toloaddatum2 = avaliablitystate
    
    const toapplyallarray = toloaddatum2[idtoapplyall-1].avaliablity
    
    console.log("inapplyall")

    toloaddatum2.forEach((element,indx) => {
       
      toloaddatum2[indx].avaliablity = [...toapplyallarray]

      
       
 
    });

    console.log(toloaddatum2)



    setavaliablitystate([...toloaddatum2])
 
  }


  function handleaddavaliabletime(idtoadd)
  {
    if (dropdownsval[idtoadd-1].fromtime && dropdownsval[idtoadd-1].totime){

    const toloadupdatum =  avaliablitystate
       
    toloadupdatum[idtoadd-1].avaliable =true 

    toloadupdatum[idtoadd-1].avaliablity.push(dropdownsval[idtoadd-1]   )
     
    setavaliablitystate([...toloadupdatum ])
    dropdownsval=  defaultdropdownvalue
    }

  }



  function changeavaliablestate(valueofday,idofday)
  {

    const toloadupdatum =  avaliablitystate
       
    toloadupdatum[idofday-1].avaliable =valueofday 

     console.log(valueofday +" "+ idofday)
   setavaliablitystate([...toloadupdatum])    
       



  }
 


  /////////////////////////////////////////
    ////////////////////////////////////////////
    const urlEndpointimg = 'https://ik.imagekit.io/4ryrtmmbd';
  const publicKey = 'public_aA3rhul/456F8yR7a10I+vvAxk8='; 
   //const server = "https://165.232.114.169:4100"
   const server ="http://localhost:4100"
  const authenticationEndpoint = server+'/signatureimage';
    ///////////////////////////////////////////
    const [file2, setFile] = useState('');
    const [imgstateb, setimgstateb] = useState('');
    const [progress, setProgress] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false);
    const [imgfileid, setimgfileid] = useState('');
    /////////////////////////////////////////////////
    const handleFileChange = (e) => {
      if (e.target.files) {
         
        if(    e.target.files[0] && e.target.files[0]['type'].split('/')[0] === 'image')
        {
          setFile(e.target.files[0]);
  
          handleUploadFile(e.target.files[0])
           
        }
        else{
              
          alert("please upload only images")
        }
       
      }
    };
  
    const handleUploadFile = (filetoup) => {
  
      console.log("inside upload click")
      if (!filetoup) {
        return;
      }
  
    
  
      console.log("i madew it bbba")
  
      
      fetch(server+'/imgauth', {
        method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => {
          setIsLoaded(false)
          console.log(data)
          const tosenddata= new FormData()
  
          tosenddata.append("file",filetoup)
          tosenddata.append("publicKey",publicKey)
          tosenddata.append("signature",data.signature)
          tosenddata.append("expire",data.expire)  
          tosenddata.append("token",data.token)  
          tosenddata.append("fileName",props.fname+props.lname+"service")  
      
          console.log(tosenddata)
          axios.post('https://upload.imagekit.io/api/v1/files/upload', tosenddata,{
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              const progress = (progressEvent.loaded / progressEvent.total) * 100;
              setProgress(progress);
            }
          })
        .then((res2) => {
          
          console.log(res2.data.url)
          setimgfileid(res2.data.fileId)
          setimgstateb(res2.data.url)
        
        })
          
        .catch((err2) => console.error(err2));
  
            
        
        
        
        })
        .catch((err) => console.error(err));
    };
  /////////////////////////////////////////////

  const [services, setservices] = useState([
    
    
    {id:0,servicetitle:"1:1 Meet With ME",typeofservice:"Video Conferencing",durationinminutes:"45 Min",priceofservice:"999",contentofservice:"Get a 1:1 meeting with me now. " ,currencyofservice:"INR",currencysymbol:"\u20B9" ,imgscr:"https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" ,imagesrcfileid:""  },
  
  
  ])





  function handleservicedelete(indextodelete)
  {



    console.log(indextodelete)
    var totemp =[]
    totemp = services
 

    totemp.splice(indextodelete, 1);


    totemp.forEach((element2,index2) => {

      totemp[index2].id=index2
      
    });

   
    console.log(totemp)
    setservices([...totemp])

    




  }
  





  const durationoptions =[

    {id:0, value:"15" , unit:"Min"},
    {id:1, value:"30" , unit:"Min"},
    {id:2, value:"45" , unit:"Min"},
    {id:3, value:"60" , unit:"Min"},
    {id:4, value:"90" , unit:"Min"},
    {id:5, value:"120" , unit:"Min"},
    
  
  
  ]


  const currencyoptionstolist=[]


currencydata.forEach(element => {


  currencyoptionstolist.push(element.cc)
  
});

  


  const [servicetitlestate, setservicetitlestate] = useState("")
  const [typeofservicestate, settypeofservicestate] = useState("Video Conferencing")
  const [durationstate, setdurationstate] = useState("15 Min")
  const [priceofservicestate, setpriceofservicestate] = useState(0)
  const [currencystate, setcurrencystate] = useState("INR")
  const [moreaboutservicestate, setmoreaboutservicestate] = useState("")
  




  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
   

    function limit (string = '', limit = 0) {  
        return string.substring(0, limit)
      }
    const todisp ="Contrary to popular belief There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
 
    return (
       
        <div  >

                       



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
                <form>
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
                  >
                    Book Now
                  </button>
            </div>

            

           
           
        

            

            
          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
         
      </div>
    </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>










         

<div className="mt-10 sm:mt-0   mb-10" >
<div className="md:grid md:grid-cols-4  sm:grid-cols-4 lg:grid-cols-4    md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Add Services</h3>
              <p className="mt-1 text-sm text-gray-600">Lets set up your service offerings now.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-3  lg:md:col-span-3  ">
             
              <div className="overflow-hidden shadow  rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-4">
                  <fieldset>
                     
                    <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                      Preview
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex justify-center mb-10">
                         
                        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
                        
                       



 

 





                        {/* ////////////////////////////////////////////////////////////////////////////////// */}
                         
                            
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:grid-cols-2">
      {/* {people.map((person) => ( */}
        
           

      {services.map((service,serviceid)=>(

           <div key={service.id}  className="relative hover:scale-105 hover:shadow-2xl transition-all duration-300  md:col-span-1 max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" style={{height:"310px" ,width:"280px"} }   >
                   
          
   
   <div style={{height:"60px" ,width:"100%"} }   className="overflow-hidden  hover:scale-y-150   ">
    <a >
        <img   className="rounded-t-lg  " src={service.imgscr} alt="" />
    </a>
    </div>
    <div className="absolute top-0 right-0   pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    value={serviceid}
                    className="rounded-md bg-gray-50 text-gray-400 hover:text-red-500  "
                    onClick={(e) =>{
                      console.log(e)
                      
                      
                       handleservicedelete(e.target.value)
                       
                       
                       
                    }}
                  >
                     
                    <XMarkIcon className="h-6 w-6"  style={{pointerEvents:"none"}} aria-hidden="true" />
                  </button>
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
                              
                      setOpen(true)
                                 
                             
                             console.log(e.target.value)


                      } }  
                       >
                    Know More
                  </button>
                  
                  
                  <button
                    type="submit"
                    className="inline-flex justify-end rounded-md bg-indigo-600 py-2 px-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Book
                  </button>
                </div>
</div>






 
      ))}



{/* setOpen(true) */}
      {/* ))} */}
    </div>
   


   
   









                         {/* //////////////////////////////////////////////////////////// */}
                      </div>
                      

                      
      <div className="space-y-12 mt-10">
        

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Add your Services</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Lets start by entering your service offerings below.</p>

          <div className="mt-4 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6 p-4 pb-6 rounded-lg shadow-md">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                 Service Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  
                  id="first-name"
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                  onChange={ (e)=>{setservicetitlestate(e.target.value)}}
                  
                  value={servicetitlestate}

                />
              </div>
            </div>

               <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                 Type
              </label>
              <div className="mt-2">
                <select
                  id="country"
                 
                   
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={typeofservicestate}
                  onChange={ (e)=>{settypeofservicestate(e.target.value)}}

 
                >
                  <option key={0}>Video Conferencing</option>
                  <option key={1}  >Text Message Conferencing</option>
                   
                </select>
              </div>
            </div>


              <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="duration" className="block text-sm font-medium leading-6 text-gray-900">
                Duration
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
        
              <div className="mt-2">
                <select
                  id="duration"
                 
                   
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={durationstate}
                   onChange={ (e)=>{setdurationstate(e.target.value)}} 

                    >
                 { durationoptions.map((duration,durationidx)=>(
                  <option key={duration.value}>{duration.value+" "+duration.unit}</option>
                  
                 ))
                 
                 } 
                </select>
              </div>
       
      </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Price Of Service
              </label>
              <div className="mt-2">
                <input
                   
                  type="number"
                   name="num" 
                   min="1" 
                    
                  id="region"
                  value={priceofservicestate}
                  onChange={ (e)=>{
                    
                    

                     
                    setpriceofservicestate(e.target.value)
                    
                    
                    
                    }} 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Currency
              </label>
              <div className="mt-2">
                <select
                  id="country"
                   
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={currencystate}
                   
                  onChange={ (e)=>{setcurrencystate(e.target.value)}} 


                   >

                   {
                    currencyoptionstolist.map((curr,currindex)=>(
                  <option key={curr}>{curr}</option>
                   
                    ))
                   }
                </select>
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                More About the Service
              </label>
              <div className="mt-2">
                <textarea
                  type="text"
                  onChange={ (e)=>{setmoreaboutservicestate(e.target.value)}} 
                  value={moreaboutservicestate}
                  id="street-address"
                  rows="5"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 
                    
         />
              </div>
            </div>

            <div className=" col-span-full bg-gray-200  h-2.5 dark:bg-gray-700 " style={{width: String(progress)+"%" ,display: (progress ==0 || progress==100)? "none":"block" }}>
  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: String(progress)+"%" ,display: (progress ==0 || progress==100)? "none":"block"}}></div>
</div>

            {(imgstateb)?   (   <div className=" col-span-full rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">Successfully uploaded</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
              onClick={()=>{
    setFile('');
  setimgstateb('');
  setimgfileid('');
  setProgress(0)
   setIsLoaded (false)}}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>) : ( <div className="col-span-full">
   
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 ml-1 text-sm font-medium text-gray-800">
      optional
      </span>
              </label>
               
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload"    accept="image/*" onChange={handleFileChange}  type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
    )}


            <div className="col-span-full  ">
                  <button
                    
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                         
                         onClick={()=>{
                                
                    if(priceofservicestate > 0 &&  servicetitlestate != "" && typeofservicestate != "" && durationstate != ""&& priceofservicestate != 0 && currencystate != "" )
                    {    
                       

                       var symboltoset ="";


                      currencydata.forEach((element,index) => {

                        if(element.cc == currencystate)
                        {
                          symboltoset=currencydata[index].symbol         
                        }
                           
                                                    
                           });
                        


                      

                      
                        
                        
                         
                         var requestOptions = {
                           method: 'GET',
                           redirect: 'follow',
                            
                         }; 
                         
                         fetch("https://api.exchangerate.host/convert?to=INR&from="+currencystate+"&amount="+priceofservicestate, requestOptions)
                           .then(response => response.json())
                           .then((result) => {
                            
                            console.log(result)
                            
                            const rate = result.info.rate
                            const ininr =rate * priceofservicestate
                            const mininothercurrency =   Math.ceil (100/rate)
                            const maxinothercurrency =   Math.ceil (600000/rate)

                            if(  ininr >= 100 && ininr <= 600000 &&  servicetitlestate != "" && typeofservicestate != "" && durationstate != ""&& priceofservicestate != 0 && currencystate != ""   )
                         {
                            
                            var toloaddata =[]
                              
                            toloaddata = services
                                
                                console.log(services)
                          var temp342 = {id: (services.length)?  services[services.length-1].id+1 : 1 ,servicetitle:servicetitlestate ,typeofservice:typeofservicestate,durationinminutes:durationstate,priceofservice:priceofservicestate,contentofservice:moreaboutservicestate ,currencyofservice:currencystate , currencysymbol:symboltoset ,imgscr: (imgstateb != "" )? imgstateb : "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" ,imagesrcfileid:imgfileid }
                            
                          toloaddata.push(temp342)
                             
                          setservices([...toloaddata])

                           setFile('');
                           setimgstateb('');
                           setimgfileid('');
                            setProgress(0)
                           setIsLoaded (false)
                           setservicetitlestate ("")
                           settypeofservicestate ("Video Conferencing")
                          setdurationstate ("15 Min")
                           setpriceofservicestate  (0)
                          setcurrencystate ("INR")
                          setmoreaboutservicestate ("")
                           

                         
                        
                        
                        
                         }
                         else if (ininr < 100 || ininr > 600000 )
                         {

                          const displaymsg = "the Price Must be in the Range of "+mininothercurrency+" "+currencystate+" to "+maxinothercurrency+" "+currencystate

                           toast.warn( displaymsg, {
                             position: "top-center",
                             autoClose: 5000,
                             hideProgressBar: false,
                             closeOnClick: true,
                             pauseOnHover: true,
                             draggable: true,
                             progress: undefined,
                             theme: "light",
                             });


                         }
                         else{
                           
                           toast.warn( "Please Fill in All the Required Fields ", {
                              position: "top-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                              });
 
                                
 
                            
 
                          }
                       
                           
                           
                           
                           
                           
                           
                           })
                           .catch((error) => 
                           
                           
                           {

                            console.log(error)
                            
                            toast.error( "Contact Support !ERROR", {
                              position: "top-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                              });
                           


                           }
                           
                           );
                             


                    }

                    else{
                           
                           toast.warn( "Please Fill in All the Required Fields ", {
                              position: "top-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                              });
 
                                
 
                            
 
                          }
                 
  
                                           
                           console.log(services)   

                       

                         }}
                         
                          >
                    Add Service
                  </button>
                </div>


            
                 
            

          
          </div>
          
        </div>

       
      </div>
 
     
                      
                    </div>
                  </fieldset>
                   
                </div>
                <div className="bg-gray-50 px-4 py-6 text-right sm:px-6">
                   
                </div>
              </div>
             
          </div>
        </div>
      </div>
 


      
<div className="mt-10 sm:mt-0" >

<div className="md:grid md:grid-cols-3 md:gap-6">

          <div className="md:col-span-1">
          
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Add Avaliablity</h3>
              <p className="mt-1 text-sm text-gray-600">Add your avaliablity Here.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
          
             
              <div className="overflow-hidden shadow rounded-md">
              
                <div className=" bg-white px-4 py-5 sm:p-6">

                 <h2 className="text-base font-semibold leading-7 text-gray-900 mb-4">Add your Timezone</h2>
          
                           
                           {/* //////////////////////////////timezone-combobox//////////////////////////////////////////////////////////// */}
                         <div className='flex relative justify-start ml-2'>
                            <Combobox as="div" value={selectedtimezone} onChange={(e)=>{
                              
                              setselectedtimezone(e)
                              
                              }}>
      <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">Please choose the prefered timezone.</Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person) => person?.value}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person.value + person.abbr}
                value={person}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{person.value}</span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
    </div>
    <h2 className="text-base font-semibold leading-7 text-gray-900 mt-6 mb-2">Add your Weekly Avaliablity</h2>
                           {/* //////////////////////////////////timezone-combobox///////////////////////////////////////////////////////// */}
                 
                 {/* ///////////////////////////////////////////////////////////////////////////// */}
                 <div className="overflow-x-auto bg-white shadow sm:rounded-md">

                 
                 
      <ul role="list" className="divide-y   divide-gray-200">
        {avaliablitystate.map((position) => (
          <li key={position.id}   > 
            <a key={position.title}  className="block hover:bg-gray-50" >
           
              <div  className="px-4 py-4 sm:px-6" >

              <div className='flex text-xs relative  justify-end ' style={{marginRight:"33px"}}>
                 <button className='font-medium text-indigo-600 mb-1 hover:text-indigo-800'
                 id={position.id}
                 onClick={(e)=>{
                  console.log("ooolllloooo")
                  
                  
                   handleapplytoall(e.target.id)  }}


                 >Apply to All</button>
            </div>
                 
             

              
                <div className="flex   justify-between mb-2"  >
                   <div className="flex items-center  "> 
                   
            <input
              id={position.id}
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 mr-1 " 
              checked={position.avaliable}
              onChange={(e)=>{
                
                console.log(e)
                 changeavaliablestate(e.target.checked , e.target.id)
                 
                   }}
              
            />
         
                  <p className="truncate text-sm font-medium text-indigo-600" style={(position.avaliable)? {opacity: 1}:{opacity: 0.6}} >{position.title}</p>
                     </div>
                
                  <div className="flex items-center  ">
                   
                 <div className="  flex flex-shrink-0  " style={(position.avaliable)? {opacity: 1}:{opacity: 0.4}}>
                 
                 <div>
                 
       <select
         id={position.id + 10}
         key="blahblah"
         
         className="  block  rounded-md border-0 py-1 pl-1 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
         style={{width:"75px"}}
         onChange={(e)=>{handledropdownvaluechange(e.target.id,e.target.value) }}
       >
       {
        timeinday.map((houreinday,idd)=>(
         
         <option key={houreinday.standard_format +"-"+ houreinday.time_of_day} >{houreinday.standard_format +" "+ houreinday.time_of_day}</option>
       
        ))
       }
       </select>
     </div>
           -
     <div>
        
        <select
          id={position.id + 20}
         key="blahblahblah"
         onChange={(e)=>{handledropdownvaluechange(e.target.id,e.target.value)}}
          className="  block  rounded-md border-0 py-1 pl-1 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          style={{width:"75px"}}
        >
         {
          timeinday.map((houreinday,idd)=>(
         
         <option  key={houreinday.standard_format +"+"+ houreinday.time_of_day} >{houreinday.standard_format +" "+ houreinday.time_of_day}</option>
       
        ))

         }
          
        </select>
      </div>
 
     </div> 

     <button
        type="button"
        value={position.id}
        className="rounded-full bg-indigo-600 p-0.5 ml-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={(e)=>{handleaddavaliabletime(e.target.value)}}
      >
        <PlusIcon className="h-5 w-5" aria-hidden="true" style={{pointerEvents:"none"}} />
      </button>
                 </div>
                  
                </div>

                <div className="flex items-center justify-center overflow-y-auto " style={(position.avaliable)? {opacity: 1}:{opacity: 0.4}} >
                  
                  {position.avaliablity.map((availabletime,index)=>(
                  <div className="ml-1 flex relative flex-shrink-0  "  >
                    <p className="inline-flex  relative rounded-md bg-green-100 px-1 py-1 text-xs font-semibold  text-green-800">
                          {availabletime.fromtime+"-"+availabletime.totime}
                           
                          <button
                      type="button"
                      value={index}
                      id={position.id}
                    
                       
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-300 hover:text-gray-500"
                       
                      onClick={(e)=>{
                         
                       console.log(e)

                       handledeleteavaliablitytime(e.target.value,e.target.id)


                       
                          
                      

                       }}  
                    >
                       
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8" style={{pointerEvents:"none"  }}>
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" style={{pointerEvents:"none" }}/>
                      </svg>
                    </button>

                    </p>
                    
                  
                  </div>
                  ))
                  }
                
                </div>


                

                 
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
                 {/* ///////////////////////////////////////////////////////////////////////////// */}
                  
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    
                    onClick={()=>{

                       var leastavaliablity=0
                         avaliablitystate.forEach(element => {
                              if(element.avaliable == true)
                              {
                                if(element.avaliablity.length > 0)
                                {
                                  leastavaliablity = leastavaliablity +1

                                }

                              }
                        
                         });
                            
                            
                        
                           
                        if(services.length > 0 && leastavaliablity >0 && selectedtimezone != null )
                        {   
                      var tosenddata={
                       
                       serviceslisted:services,
                       avaliablityandtimezone:{weeklyavaliablity:avaliablitystate , timezonedata:selectedtimezone         }


                      }

                      props.sendserviceandavaliablitydatatomentorsignupnow(tosenddata)

                        }

                        else if(services.length <= 0)
                        {

                          toast.warn( "Atleast One Service must be added! ", {
                              position: "top-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                              });

                        }
                        else if(leastavaliablity == 0)
                        {
                          toast.warn( "Avaliablity cannot be empty! ", {
                              position: "top-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                              });

                        }

                        else if(selectedtimezone == null)
                        {

                          toast.warn( "Timezone cannot be empty! ", {
                              position: "top-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                              });

                        }
                        else 
                        {
                          toast.error( "Error!", {
                              position: "top-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                              });
                          
                        }


                    }}
                  
                  
                     >
                    Next
                  </button>
                </div>
              </div>
             
          </div>
        </div>
      </div>



 

        
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      </div>
         
       
    )
  }
  
  export default addservices
  