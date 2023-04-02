




import React, { useState , useEffect , Fragment} from 'react';
import { CheckIcon, HandThumbUpIcon,EllipsisVerticalIcon,CheckCircleIcon, XMarkIcon, UserIcon ,ChevronDownIcon , ChevronUpDownIcon ,BriefcaseIcon ,FireIcon  } from '@heroicons/react/20/solid'
import { toast, ToastContainer } from 'react-toastify';
import { Listbox, Transition,Popover,Combobox  } from '@headlessui/react'
import { ColorRing } from  'react-loader-spinner'
import  axios from 'axios'
 



const publishingOptions = [
    { title: 'Full-Time', description: 'Add all your main projects,jobs and hustles like Software-engineer,Youtuber,Actor,Doctor here.', current: true },
    { title: 'Part-Time', description: 'Add all your internships,part-time jobs,side projects here', current: false },
    { title: 'Personal Interest', description: 'Add all your hobbies,side hustles like Blogging,Learning languages here.', current: false },
     
  ]
  
  const skillsuggest = [
    { id: 1, name: 'Leslie Alexander' },
    // More users...
  ]
  
  
  
   
  
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



  function displaytoast(e)
  {
  
    toast.warn( e+" is Required", {
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
   
  
  function displayerrortost(e)
  {
  
    toast.error( e, {
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




function Profilesetuppage(props) {

   


    
    
    const colorsforskills=["bg-pink-600" ,'bg-purple-600' ,'bg-yellow-500','bg-green-500' ]

    const people = [
      { id: 1, name: 'Leslie Alexander' },
       
    ]
  
    const [language, setlanguage] = useState([  { id: 0, content: 'English' },
     
   
    ])
  
    const [query, setQuery] = useState('')
    const [selectedPerson, setSelectedPerson] = useState(null)
    const [selectedlanguage, setselectedlanguage] = useState('')
    const filteredPeople =
      query === ''
        ? people
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.toLowerCase())
          })
  
    const [skillstoupdate, setskillstoupdate] = useState("")
  
   
  
   
  
  
    const [skills, setskills] = useState(  [
      {  key:0,  id:0,     name: 'Mentoring', initials: 'ME',  bgColor: 'bg-pink-600' },
      
    
    ] )
    const [selected, setSelected] = useState(publishingOptions[0])
  
    const [experiencetitle, setexperiencetitle] = useState("")
    const [experiencecontent, setexperiencecontent] = useState("")
    
    const[profiletitle,setprofiletitle]=useState("Your Title /  Expertise")
    const[profilepitchline,setprofilepitchline]=useState("Your Pitch Line goes here...")
    const[profileaboutyou,setprofileaboutyou]=useState("")
  





    const [skillsquery, setskillsquery] = useState('')
    const [selectedskill, setselectedskill] = useState(null)
    const filteredskillsz =
    skillsquery === ''
      ? skillsuggest
      : skillsuggest.filter((person) => {
          return person.name.toLowerCase().includes(skillsquery.toLowerCase())
        })
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
          tosenddata.append("fileName",props.fname+props.lname)  
      
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
  
    ////////////////////////////////////////////////////////
  
  
  
  
    /////////////////////////date-picker/////////////////////////////////////////////////////////////////////////
   
    const allyears = [
      { id: 0, name: 'none' },
      { id: 1, name: 'present' }
    ]
  
  
  
    for (let index = 1980; index <= new Date().getFullYear(); index++) {
     
      var topushintoyeardata = { id: index+2, name: String(index) }
      allyears.push(topushintoyeardata)
      
    }
  
   
    const allmonths = [
      { id: 0, name: 'none' },
      { id: 1, name: 'present' },
      { id: 2, name: 'January' },
      { id: 3, name: 'February' },
      { id: 4, name: 'March' },
      { id: 5, name: 'April' },
      { id: 6, name: 'May' },
      { id: 7, name: 'June' },
      { id: 8, name: 'July' },
      { id: 9, name: 'August' },
      { id: 10, name: 'September' },
      { id: 11, name: 'October' },
      { id: 12, name: 'November' },
      { id: 13, name: 'December' },
       
    ]
  
  
    const [queryfromyear, setqueryfromyear] = useState('')
    const [selectedfromyear, setselectedfromyear] = useState("")
  
    
    const [queryfrommonth, setqueryfrommonth] = useState('')
    const [selectedfrommonth, setselectedfrommonth] = useState("")
  
    const [querytoyear, setquerytoyear] = useState('')
    const [selectedtoyear, setselectedtoyear] = useState("")
  
  
    const [querytomonth, setquerytomonth] = useState('')
    const [selectedtomonth, setselectedtomonth] = useState("")
  
  
    const filteredfromyear =
    queryfromyear === ''
        ? allyears
        : allyears.filter((person) => {
            return person.name.toLowerCase().includes(queryfromyear.toLowerCase())
          })
  
  
        
          const filteresfrommonth =
          queryfrommonth === ''
              ? allmonths
              : allmonths.filter((person) => {
                  return person.name.toLowerCase().includes(queryfrommonth.toLowerCase())
                })
  
                 
  
             
              
                const filteredtoyear =
                querytoyear === ''
                    ? allyears
                    : allyears.filter((person) => {
                        return person.name.toLowerCase().includes(querytoyear.toLowerCase())
                      })
              
                       
  
                     
                    
                      const filteredtomonth =
                      querytomonth === ''
                          ? allmonths
                          : allmonths.filter((person) => {
                              return person.name.toLowerCase().includes(querytomonth.toLowerCase())
                            })
                
  
   
  
  /////////////////////////date-picker/////////////////////////////////////////////////////////////////////////
   
  
  
  
  
  
  
  
    
    const [timeline,settimeline] = useState( [
     
      {
        id: 0,
        exptitle: 'Influencer',
        exptype:'Personal Interest',
        content: 'Joined MeetMyMentor as a Influencer and Mentor ',
        fromdatemonth:allmonths[new Date().getMonth()+2].name,
        fromdateyear:new Date().getFullYear(),
        todatemonth:"",
        todateyear:"",
         
         
       
      },
   
    ]
    )
  
    
    function handleaddexperience(experiencetitle,experiencecontent,experiencetype,frommonth,fromyear,tomonth,toyear)
    {         
      if(experiencetitle != "" && experiencetitle != null )
      {
      var datatoloadintoexp =[]
  
       datatoloadintoexp =timeline
       if(datatoloadintoexp.length > 1)
       {
        datatoloadintoexp= datatoloadintoexp.reverse()
       }
  
       var temp90 =  {
        id:(datatoloadintoexp.length == 0)? 0 : datatoloadintoexp[datatoloadintoexp.length -1].id +1 ,
        exptitle: experiencetitle,
        exptype: experiencetype,
        content: experiencecontent,
        fromdatemonth:(frommonth != "none" && frommonth && fromyear && fromyear != "none")?  frommonth : ""    ,
        fromdateyear: (fromyear != "none" && fromyear  )? fromyear: "" ,
        todatemonth:(tomonth != "none" && tomonth && toyear && toyear != "none")? tomonth : "",
        todateyear:(toyear != "none" && toyear)? toyear : "",
         
       
   
      }
  
      datatoloadintoexp.push(temp90)
      datatoloadintoexp= datatoloadintoexp.reverse()
     console.log(datatoloadintoexp)
      settimeline([...datatoloadintoexp])
  
   setSelected(publishingOptions[0])
  
   setexperiencetitle("")
    setexperiencecontent("")
    setqueryfromyear('')
     setselectedfromyear("")
    
      
     setqueryfrommonth('')
     setselectedfrommonth("")
    
    setquerytoyear('')
       setselectedtoyear("")
    
    
    setquerytomonth('')
    setselectedtomonth("")
  
  
    } 
    else
    {
       
      toast.warn('Experience title is Required!', {
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
  
  
    }
  
  
  
   
  
  
  
  
    const products = [
      {
        id: 1,
        name: 'Zip Tote Basket',
        color: 'White and black',
        href: '/mentorprofileview',
        imageSrc: 'https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: 'Jack Dorsey',
      },
      {
          id: 2,
          name: 'Zip Tote Basket',
          color: 'White and black',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
          imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
          price: "tina turner",
        },
        
    ]
  
    
   
          
  
  
    function handledeleteexptime(todeleteid){
            
      console.log(todeleteid)
      var totemp =[]
      totemp = timeline
      var todeleteindex=null;
  
      totemp.forEach((element,indextodelete) => {
                      
        if(element.id == todeleteid)
        {
          todeleteindex = indextodelete  
        }
  
        
      });
  
      totemp.splice(todeleteindex, 1);
  
  
      totemp.forEach((element2,index2) => {
  
        totemp[index2].id=(totemp.length-1)-index2
        
      });
  
     
      console.log(totemp)
      settimeline([...totemp])
  
  
      
  
    }
  
    function handledeletelanguage(todeletelangid)
    {
  
      console.log(todeletelangid)
      var totemp =[]
      totemp = language
      var todeleteindex=null;
  
      totemp.forEach((element,indextodelete) => {
                      
        if(element.id == todeletelangid)
        {
          todeleteindex = indextodelete  
        }
  
        
      });
  
      totemp.splice(todeleteindex, 1);
  
  
      totemp.forEach((element2,index2) => {
  
        totemp[index2].id=index2
        
      });
  
     
      console.log(totemp)
      setlanguage([...totemp])
  
    }
  
  
  
    function handledeleteofskills(todeleteskillzid)
    {
  
      console.log(todeleteskillzid)
      var totemp =[]
      totemp = skills
      var todeleteindex=null;
  
      totemp.forEach((element,indextodelete) => {
                      
        if(element.id == todeleteskillzid)
        {
          todeleteindex = indextodelete  
        }
  
        
      });
  
      totemp.splice(todeleteindex, 1);
  
  
      totemp.forEach((element2,index2) => {
  
        totemp[index2].id=index2
        
      });
  
     
      console.log(totemp)
      setskills([...totemp])
  
  
  
  
  
  
  
    }



 
 
    return (
        <div  >
        <div className="md:grid md:grid-cols-3 md:gap-6" >
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900" style={{marginTop:"25%"}}>Profile</h3>
              <p className="mt-1 text-sm text-gray-600" >
                Now Lets Set Up your Public Profile.<br/>The Image below is how customers discover you on the explore page.
              </p>
              
            </div>
              {/* ///////////////////////////////////////////////////////////////////// */}
          <div className="relative flex justify-center   mt-20  mb-28">
                      <div key={products[0].id} className="   " style={{width:"250px" , height:"274px"}}>
                <div className="relative ">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg   ">
                  <ColorRing
  visible={!isLoaded}
  height="50"
  width="50"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  
  wrapperClass="blocks-wrapper absolute z-50"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
                    <img
                      src={(imgstateb)?imgstateb+"/tr:w-600,h-700,fo-auto" : (props.ugender == "Female" || props.ugender =="Non-Binary")? "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" : "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" }
                      alt={"Network Error"}
                      className="h-full w-full object-cover object-center  "
                      onLoad={() => {
          setIsLoaded(true);
        }}
                    />
                  </div>
                  <div className="  bg-gray-200  h-2.5 dark:bg-gray-700 " style={{width: String(progress)+"%" ,display: (progress ==0 || progress==100)? "none":"block" }}>
  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: String(progress)+"%" ,display: (progress ==0 || progress==100)? "none":"block"}}></div>
</div>
                  <div className="relative mt-4 " style={{maxHeight:"50px"}}>
                    <h3 className="text-md font-medium text-gray-900">{profiletitle}</h3>
                    <p className="mt-1 text-sm text-gray-500">{profilepitchline}</p>
                  </div>
                  
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-70 hover:opacity-40 transition-opacity duration-300 "  
                       
                    />
                    <p className="relative text-lg font-semibold text-white ">{props.fname+" "+props.lname}</p>
                  </div>
                </div>
                <div className="mt-6">
                   
                </div>
              </div>
              </div>
          {/* /////////////////////////////////////////////////////////////////////// */}
          </div>
          
          <div className="mt-5 md:col-span-2 md:mt-0">
        
            
              <div className="shadow  sm:overflow-hidden rounded-md"  >
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6" >



                      
                <div>
                    <label className="text-base font-semibold leading-6 text-gray-900">Your very own Avatar</label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                      <ColorRing
  visible={!isLoaded}
  height="40"
  width="40"
  ariaLabel="blocks-loading"
  wrapperStyle={{marginLeft:"5px",marginTop:"5px"  
   }}
  
  wrapperClass="blocks-wrapper absolute  "
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
                      <img
                                 className="inline-block w-full h-full rounded-full overflow-hidden "
                                  src={(imgstateb)?  imgstateb+"/tr:w-48,h-48,fo-face" : (props.ugender=="Female" || props.ugender =="Non-Binary")?"https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" : "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                                     alt=""
                                     />
                      </span>
                     {(imgstateb)? (<button
                        type="button"
                        className="ml-5 rounded-md border border-red-300 bg-red-50 py-1.5 px-2.5 text-sm font-semibold text-red-900 shadow-sm hover:bg-red-200"
                        onClick={()=>{
                             setFile('');
                           setimgstateb('');
                           setimgfileid('')
                           setProgress(0)
                            setIsLoaded (false)}
                            }
                      >
                        Delete
                      </button>) : null}
                    </div>
                  </div>
                        

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Profile photo</label>
      
{(imgstateb)?   (   <div className="rounded-md bg-green-50 p-4">
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
    </div>) :
                   ( <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload"   type="file" accept="image/*" onChange={handleFileChange} className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>) }

                  </div>



 



                         
               



                  <div className="grid grid-cols-3 gap-6" >
                    <div className="col-span-3 sm:col-span-2 " >
                      <label htmlFor="titleexpertiese" className="text-base font-semibold leading-6 text-gray-900" >
                      Your Title / Expertise
                      </label>
                      <div className="mt-2 flex rounded-md shadow-sm">
                         
                        <input
                          type="text"
                          name="titleexpertiese"
                          id="titleexpertiese"
                          className="block w-full flex-1 rounded-md   border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           placeholder="Youtuber,Tatoo Artist,Coder,astrologer..."
                           onChange={(e)=>{ setprofiletitle(e.target.value)}}

                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6" >
                    <div className="col-span-3 sm:col-span-2 " >
                      <label htmlFor="pitchline" className="text-base font-semibold leading-6 text-gray-900" >
                      Your Pitch-Line
                      </label>
                      <div className="mt-2 flex rounded-md shadow-sm">
                         
                        <input
                          type="text"
                          name="pitchline"
                          id="pitchline"
                          className="block w-full flex-1 rounded-md   border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Making youtube videos on a daily basis."
                          onChange={(e)=>{setprofilepitchline(e.target.value)}}
                        />
                      </div>
                    </div>
                  </div>


               


                 

                  

                  <div>
                    <label htmlFor="about" className="text-base font-semibold leading-6 text-gray-900">
                      Tell us a bit about you.
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="I have acheived the youngest Entrepreneur award in ..."
                        value={profileaboutyou}
                        onChange={(e)=>{ 
                          console.log(e.target.value)
                          setprofileaboutyou(e.target.value)
                          }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>
          {/* //////////////////////////////////////////////experience timeline////////////////////////////////////////////////////////////////////// */}
                  <div style={{width:"100%"}}   >
                  <h1 className={"  text-base font-semibold leading-6 text-gray-900 "}  >Experience Timeline</h1>
                  <div className="flow-root  mt-5 bg-white shadow  rounded-lg  ">
      <ul role="list" className="-mb-8 px-4 py-5 sm:p-6">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div  >
                  <span
                    className={ `h-8 w-8 rounded-full flex items-center  justify-center ring-8 ring-white  ${(event.exptype == "Full-Time") ? "bg-green-500": (event.exptype == "Part-Time") ? "bg-blue-500" : (event.exptype == "Personal Interest") ? "bg-yellow-300":null } `}                                  
                    //  event.iconBackground,
                  >
                                               
                                             
                    {
                      (event.exptype == "Personal Interest")? <FireIcon className="h-5 w-5 text-white"  aria-hidden="true" /> : (event.exptype == "Full-Time")? <BriefcaseIcon className="h-5 w-5 text-white"  aria-hidden="true" />: (event.exptype == "Part-Time")? <BriefcaseIcon className="h-5 w-5 text-white"  aria-hidden="true" /> : null


                    }
                   
                     
                  
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-0">
              
                  <div>
                  <h3 className="text-sm font-semibold text-gray-500"  > {event.exptitle}</h3>
                  
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                       
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    { (event.todateyear && event.fromdateyear && event.todatemonth != "present")? 
                    <time> {event.fromdatemonth.slice(0,3).toLowerCase()+' '+event.fromdateyear+  "-"  +event.todatemonth.slice(0,3).toLowerCase()     +' '+event.todateyear} </time> 
                    : (!event.todateyear || !event.fromdateyear && event.todatemonth != "present")? <time  >{event.fromdatemonth.slice(0,3).toLowerCase()+' '+event.fromdateyear+  " "  +event.todatemonth.slice(0,3).toLowerCase()   +' '+event.todateyear} 
                    </time> :(event.todateyear && event.fromdateyear )? 
                    <time  >{event.fromdatemonth.slice(0,3).toLowerCase()+' '+event.fromdateyear+  "-"     +' '+event.todateyear} 
                    </time>: <time  >{event.fromdatemonth.slice(0,3).toLowerCase()+' '+event.fromdateyear+  " "     +' '+event.todateyear} 
                    </time>}
                     <button
                      type="button"
                      
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-red-300 hover:text-gray-500"
                       
                      onClick={()=>{ handledeleteexptime(event.id) }}  
                    >
                       
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8" style={{pointerEvents:"none"  }}>
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" style={{pointerEvents:"none" }}/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>

                    {/* //////////////////////////////////////////////add experience timeline/////////////////////////////////////////////////////////////////////////// */}
                   <div className="mt-1" >
                   <div className="bg-white   rounded-lg">
      <div className="px-4  py-4 sm:p-6  relative flex ">
        {/* ///////////////////////////list-box//////////////////////////////////////////// */}
        <Listbox value={selected} onChange={setSelected}  >
       {({ open }) => (
        < >
          <Listbox.Label className="sr-only "> </Listbox.Label>
          <div className="  flex " style={{display:"inline-block"}} >
          
            <div className="relative flex inline-flex divide-x divide-indigo-700 rounded-md shadow-sm  "  >
              <div className="relative flex inline-flex items-center gap-x-1 rounded-l-md bg-indigo-600 py-2 px-3 text-white shadow-sm">
                <CheckIcon className="-ml-2 h-5 w-5" aria-hidden="true" />
                <p className="text-xs  ">{selected.title}</p>
              </div>
              <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-600 p-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50">
                 
                <ChevronDownIcon className="h-5 w-5 text-white"  aria-hidden="true" />
              </Listbox.Button>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute left-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {publishingOptions.map((option) => (
                  <Listbox.Option
                    key={option.title}
                     
                    className={({ active}) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'cursor-default select-none p-4 text-sm'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p className={selected ? 'font-semibold' : 'font-normal'}>{option.title}</p>
                          {selected ? (
                            <span className={active ? 'text-white' : 'text-indigo-600'}>
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </div>
                        <p className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'mt-2')}>
                          {option.description}
                        </p>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
            {/* /////////////////////////////////////////////////////date-drop-downs///////////////////////////////////////////////////// */}
            <div className="relative  mt-2 " >
          <Popover className="relative flex  " style={{display:"inline-block"}}>
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-inset rounded-md ring-gray-300 px-2.5" style={{marginLeft:"30px"}}>
        <span>From</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-0 z-10 mt-0 flex w-screen max-w-min px-4 -translate-x-[20px] ">
                                            
          <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
         {/* //////////////////////////////////////////select-from-date////////////////////////////////////////////////////////////////////////////  */}
          <Combobox as="div" value={selectedfromyear} onChange={ setselectedfromyear}       >
      <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">Year</Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setqueryfromyear(event.target.value)}
          displayValue={(person) => person?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredfromyear.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredfromyear.map((person) => (
              (person.name != "present")? <Combobox.Option
                key={person.id}
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
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{person.name}</span>

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
              </Combobox.Option> : null
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
             {/* //////////////////////////////////////////select-from-date-year-end////////////////////////////////////////////////////////////////////////////  */}
             {/* ///////////////////////////////////////////select-from-date-month/////////////////////////////////////////////////////////////////////////////////////////////////// */}
             <Combobox as="div" value={selectedfrommonth}   onChange={setselectedfrommonth}>
      <Combobox.Label className="block mt-2 text-sm font-medium leading-6 text-gray-900">Month</Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setqueryfrommonth(event.target.value)}
          displayValue={(person) => person?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteresfrommonth.length > 0   && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteresfrommonth.map((person) => (
              (person.name != "present")? <Combobox.Option
                key={person.id}
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
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{person.name}</span>

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
              </Combobox.Option> :null
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>                                       


             {/* ///////////////////////////////////////////select-from-date-month-end/////////////////////////////////////////////////////////////////////////////////////////////////// */}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

      <Popover className="relative flex" style={{display:"inline-block"}}>
      <Popover.Button className="inline-flex items-center mt-2 gap-x-1 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-inset rounded-md ring-gray-300 " style={{marginLeft:"30px" , paddingLeft:"18px",paddingRight:"18px"}}>
        <span   >Till</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-0 z-10 mt-0 flex w-screen max-w-min -translate-x-[20px]  px-4">
          <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
          
            {/* ////////////////////////////////////////////////////select-to-date-and-year drop down/////////////////////////////////////////////////////////////////////// */}
            <Combobox as="div" value={selectedtoyear} onChange={setselectedtoyear}>
      <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">Year</Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setquerytoyear(event.target.value)}
          displayValue={(person) => person?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredtoyear.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredtoyear.map((person) => (
              <Combobox.Option
                key={person.id}
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
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{person.name}</span>

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


    <Combobox as="div" value={selectedtomonth} onChange={setselectedtomonth}>
      <Combobox.Label className="block mt-2 text-sm font-medium leading-6 text-gray-900">Month</Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setquerytomonth(event.target.value)}
          displayValue={(person) => person?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredtomonth.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-36 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredtomonth.map((person) => (
              <Combobox.Option
                key={person.id}
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
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{person.name}</span>

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
            
     

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
         
         </div>
         {/* ///////////////////////////////////////////date dropdowns//////////////////////////////////////////////////////////////// */}
          </div>
        </>
           )}
      
    </Listbox>
        {/* /////////////////////////////list-box//////////////////////////////////////////// */}
        <div className="  ml-2" style={{width:"100%" ,display:"inline-block"}}>
          <div className="  text-sm text-gray-500" >
          <div>
         
          <div className="relative">
      <label
        htmlFor="experiencetitle"
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        Experience Title  
      </label>
      <input
        type="text"
        name="experiencetitle"
        id="experiencetitle"
        value={ experiencetitle}
        onChange={(e)=>{setexperiencetitle(e.target.value)}}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Chief-Baker , youtuber , operations manager... "
      />
    </div>
      <div className="mt-1.5 mb-0 flex "  >
      
          
        <textarea
          cols="20" rows="5" wrap="hard" maxLength="150"
          style={{width:"100%",height:"80px" , resize: "none" ,display:"inline-block"}}
          name="comment"
          id="comment"
          value={experiencecontent}
          onChange={(e)=>{setexperiencecontent(e.target.value)}}
          className="block w-full text-sm rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm  "
           
          placeholder="managed 50 people,ran a restaurent..."
        />
       

      </div>
        
      
    </div>
          </div>
          <div className="mt-5 relative flex sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center  justify-end">
            <button
              type="button"
              className="inline-flex mt-1  items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
               onClick={()=>{ handleaddexperience(experiencetitle  , experiencecontent , selected.title  ,selectedfrommonth.name  , selectedfromyear.name  ,selectedtomonth.name  ,selectedtoyear.name  ) }} 
                >
              Add Experience
            </button>
          </div>
        </div>
      </div>
    </div>
                  </div>
                  
                  {/* ///////////////////////////////////////////////
                                                   
  ///////////////////////////////////////////////////////////////////// */}
                  
                  </div>
      {/* //////////////////////////////////////////////experience timeline//end//////////////////////////////////////////////////////////////////// */}

       {/* //////////////////////////////////////////////////Skills And Expertise////////////////////////////////////////////////////////////////////////////////////////////////*/}
      
      <div className="grid grid-cols-1 " style={{width:"95%"}} >
      
                    <div className="col-span-1 sm:col-span-1 " >
                      <label htmlFor="titleexpertiese" className="text-base font-semibold leading-6 text-gray-900" >
                      Skills And Expertise
                      </label>
                      <div   >
                      <div>
      <h2 className="text-sm font-medium text-gray-500">Add your skills here</h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {skills.map((project) => (
          <li key={project.id} className="col-span-1 flex rounded-md shadow-sm mr-10">
            <div
              className={classNames(
                project.bgColor,
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between  shadow-md rounded-r-md border-t border-r border-b border-gray-200 bg-white" >
              <div className="flex-1  pb-5 px-3 py-2 text-sm">
                <p  className="font-medium text-gray-700 hover:text-gray-500   ">
                  {project.name}
                </p>
                 
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  id={project.id}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none hover:bg-gray-100 "
                  onClick={(e)=>{
                    
                    
                    console.log(e.target.id)
                    handledeleteofskills(e.target.id)
                    
                    
                    }}
                >
                   
                  <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8" style={{pointerEvents:"none"}}>
            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" style={{pointerEvents:"none"}}/>
          </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
      </div>
                      <div className="mt-2 flex rounded-md  justify-end" style={{width:"100%"}}>
                         
                      <Combobox as="div" value={selectedskill} onChange={(e)=>{
                        
                        setselectedskill(e)
                        setskillsquery(e.name)
                        setskillstoupdate(e.name)
                        
                        }}>
       
      <div className="relative mt-2" >
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => {
            setskillsquery(event.target.value)  
            setskillstoupdate(event.target.value)
            console.log(event.target.value)
            }}
          displayValue={(person) => person?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredskillsz.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredskillsz.map((person) => (
              <Combobox.Option
                key={person.id}
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
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{person.name}</span>

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
    <button
              type="button"
              className="inline-flex mt-1 ml-5 mr-2 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
               onClick={()=>{ 
                
                
               // console.log("query: "+skillsquery,"  "+"selected: "+selectedPerson.name) 
               
              

               if(skillstoupdate)
               {
                // [skills, setskills] = useState(  [

                      var toloaddata567 =   skills
                      var temp7899 ={  key:(skills.length>0)? skills[skills.length-1].key+1 : 1,  id:(skills.length>0)? skills[skills.length-1].id+1 : 1,     name: skillstoupdate, initials: skillstoupdate.slice(0, 2).toUpperCase() ,   bgColor: colorsforskills[Math.floor(Math.random() * (4))] }
                      toloaddata567.push(temp7899)
                      //Math.floor(Math.random() * (max - min + 1)) + min
                      setskills([...toloaddata567])
                      
                      setselectedskill("")
                      setskillsquery("")
                      setskillstoupdate("")

               }
               
                 

               
               }}
               >
              Add  
            </button>

    
                      </div>
                    </div>
                  </div>
      
{/* ///////////////////////////////////////////////Skills And Expertise-end////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


{/* ////////////////////////////////////////////////Add-Languages////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className="grid grid-cols-1  " style={{width:"95%"}} >
      
      <div className="col-span-1 sm:col-span-1 mb-10" >
        <label htmlFor="titleexpertiese" className="text-base font-semibold leading-6 text-gray-900" >
        Language Proficiency
        </label>
        <div   >
        <div>
<h2 className="text-sm font-medium text-gray-500">Add your language proficiency here</h2>
 
</div>
</div>


{ language.map((lang) => (
<span className="inline-flex items-center mt-4 mb-2 mr-2 rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800"
       key={lang.id}
                >
        {lang.content}
        <button
          type="button"
          className="ml-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500 focus:text-white focus:outline-none"
          key={lang.id}
          id={lang.id}
         onClick={(e)=>{
          handledeletelanguage(e.target.id)}}
       
       
        >
           
          <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8" style={{pointerEvents:"none"}}>
            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" style={{pointerEvents:"none"}} />
          </svg>
        </button>
      </span>

))

}

        <div className="mt-2 flex rounded-md  justify-end" style={{width:"100%"}}>

        
           
        <Combobox as="div" value={selectedPerson} onChange={(e)=>{
          
          setSelectedPerson(e)
          setselectedlanguage(e.name)
          
          
          }}>

<div className="relative mt-2" >
<Combobox.Input
className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
onChange={(event) => {
  setQuery(event.target.value)
  setselectedlanguage(event.target.value)
console.log(event.target.value)
}}
displayValue={(person) => person?.name}
/>
<Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
</Combobox.Button>

{filteredPeople.length > 0 && (
<Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
{filteredPeople.map((person) => (
<Combobox.Option
  key={person.id}
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
      <span className={classNames('block truncate', selected && 'font-semibold')}>{person.name}</span>

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
<button
type="button"
className="inline-flex mt-1 ml-5 mr-2 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
 onClick={()=>{ 
  
  
 // console.log("query: "+skillsquery,"  "+"selected: "+selectedPerson.name) 
 
 if(selectedlanguage)
               {
                // [skills, setskills] = useState(  [

                      var toloaddata567 =   language
                      var temp7899 ={  key:(language.length>0)? language[language.length-1].key+1 : 1,  id:(language.length>0)? language[language.length-1].id+1 : 1,     content: selectedlanguage }
                      toloaddata567.push(temp7899)
                      
                      setlanguage([...toloaddata567])
                      
                    
                      setselectedlanguage("")
                      setSelectedPerson("")
                      setQuery("")
               }
               
                 

               
              

  
   

 
 }}
 >
Add  
</button>


        </div>
      </div>
    </div>


{/* ////////////////////////////////////////////////add-languages-end/////////////////////////////////////////////////////////////////////////////////////////////////////// */}




                </div>
                <div className="bg-gray-50 px-5 py-3 text-right sm:px-6">
                  <button
                     
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    
                    onClick={()=>{
                       
                      if(imgstateb !="" && profiletitle != ""&&  profiletitle !="Your Title /  Expertise" && profilepitchline != "" && profilepitchline != "Your Pitch Line goes here..." )
                           {    


                            var datatosend={
                             profiletitle: profiletitle,
                             profilepitchline:profilepitchline,
                             imgsrc:imgstateb,
                             imgfileid:imgfileid,
                             profileaboutyou:profileaboutyou,
                             profileexperiencetimeline:timeline,
                             profileskills:skills,
                             profilelanguage:language,
                           }


                           props.senddatatomentorsignupnow(datatosend)
                            


                           }

                           else if(imgstateb =="" )
                           {
                            displaytoast("Profile Image")
                           }

                           else if(profiletitle =="" || profiletitle =="Your Title /  Expertise")
                           {
                            displaytoast("Title / Expertise")
                           }
                             
                           else if(profilepitchline =="" || profilepitchline == "Your Pitch Line goes here...")
                           {
                            displaytoast("Pitch Line")
                           }  

                           else{
                             
                             displayerrortost("Sorry Something Went Wrong")

                           }







                    }}
                  
                  >
                   Next
                  </button>
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
    
    export default Profilesetuppage
    