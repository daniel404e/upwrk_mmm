import { Outlet, Link , redirect ,Navigate, Route, Routes, useNavigate  } from "react-router-dom";
import Personalinfocomp from '../components/personalinfomentorsignup.jsx'
import React, { useState , useEffect} from 'react';
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
 

export default function Example() {
  
  const [whichpage,setpage] =useState("PERSONALINFO")

  const [timeline,settimeline] = useState( [
    {
      id: 1,
      content: 'Applied to',
      target: 'Front End Developer',
      href: '#',
      date: 'Sep 2022 - aug 2022',
      datetime: '2020-09-20',
      icon: UserIcon,
      iconBackground: 'bg-gray-400',
    },
    {
      id: 2,
      content: 'Advanced to phone screening by',
      target: 'Bethany Blake',
      href: '#',
      date: 'Sep 22',
      datetime: '2020-09-22',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 3,
      content: 'Completed phone screening with',
      target: 'Martha Gardner',
      href: '#',
      date: 'Sep 28',
      datetime: '2020-09-28',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
    },
    {
      id: 4,
      content: 'Advanced to interview by',
      target: 'Bethany Blake',
      href: '#',
      date: 'Sep 30',
      datetime: '2020-09-30',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 5,
      content: 'Completed interview with',
      target: 'Katherine Snyder',
      href: '#',
      date: 'Oct 4',
      datetime: '2020-10-04',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
    },
  ]
  )


  const [pages,setcurrentpage] =useState( [
    { name: 'Personal info', href: '#', current: true },
    { name: 'Profile set-up', href: '#', current: false },
    { name: 'Add Availability', href: '#', current: false },
  ])




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

      totemp[index2].id=index2
      
    });

     
    console.log(totemp)
    settimeline([...totemp])


    

  }



  return (
      <div className="bg-gray-100 "  >
      
    <div className="container  mx-auto sm:px-6 lg:px-8  rounded-2xl "  >
    
    <div className="md:flex md:items-center md:justify-between">
    
      <div className="min-w-0 flex-1">
      
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mt-4">
          Let's Get started
        </h2>
        <div className="border-b border-gray-200 pb-5">
      <h3 className="text-base   leading-6 text-gray-500">Mentor Profile</h3>
    </div>
      </div>
      {/* /////////////////////////////////////////nav-bar///////////////////////////////////////////////////////// */}
      <nav className="flex border-b border-gray-200 bg-white rounded-lg" aria-label="Breadcrumb">
      <ol role="list" className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
        <li className="flex">
          <div className="flex items-center">
            <a href="#" className="text-gray-400 hover:text-gray-500">
            <RocketLaunchIcon className="h-6 w-6 text-gray-500" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex ">
            <div className="flex items-center ">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <a
                 
                className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900 "  
                
                 style={page.current? {color:"blue"}:{color:"gray"} } 
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
    {/* /////////////////////////////////////////nav-bar-end///////////////////////////////////////////////////////// */}
      <div className="mt-2 flex md:mt-0 md:ml-4">
      
      </div>
    </div>
       
<div>
    <div className="hidden sm:block" aria-hidden="true">
        <div className="py-6">
           
        </div>
      </div>

      { whichpage=="PERSONALsINFO" ? <Personalinfocomp/> : null }


</div>


                      {/* /////////////////////////////////////////////////////////////////////////////// */}
                     
              {/* ///////////////////////////////////////////////////////////////////////////// */}
       
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
                    <img
                      src={products[0].imageSrc}
                      alt={products[0].imageAlt}
                      className="h-full w-full object-cover object-center  "
                    />
                  </div>
                  <div className="relative mt-4 " style={{maxHeight:"50px"}}>
                    <h3 className="text-md font-medium text-gray-900">Your Title /  Expertise</h3>
                    <p className="mt-1 text-sm text-gray-500">Your Pitch Line......</p>
                  </div>
                  
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-70 hover:opacity-40 transition-opacity duration-300 "  
                       
                    />
                    <p className="relative text-lg font-semibold text-white ">Your Name</p>
                  </div>
                </div>
                <div className="mt-6">
                   
                </div>
              </div>
              </div>
          {/* /////////////////////////////////////////////////////////////////////// */}
          </div>
          
          <div className="mt-5 md:col-span-2 md:mt-0">
        
            <form action="#" method="POST" >
              <div className="shadow  sm:overflow-hidden sm:rounded-md"  >
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6" >


                <div>
                    <label className="text-base font-semibold leading-6 text-gray-900">Your very own Avatar</label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                      <img
                                 className="inline-block w-full h-full rounded-full overflow-hidden "
                                  src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80 "
                                     alt=""
                                     />
                      </span>
                      <button
                        type="button"
                        className="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                      >
                        Edit
                      </button>
                    </div>
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
                        defaultValue={''}
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
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                       
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
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
                   <div className="mt-5" >
                   <div className="bg-white shadow  rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Manage subscription</h3>
        <div className="mt-2 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-xl text-sm text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque
              repudiandae nam.
            </p>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Add Experience
            </button>
          </div>
        </div>
      </div>
    </div>
                  </div>
                  {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                  
                  </div>
      {/* //////////////////////////////////////////////experience timeline//end//////////////////////////////////////////////////////////////////// */}
                  

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                    <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

     

      <div className="hidden sm:block" aria-hidden="true" >
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0" >
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Notifications</h3>
              <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <fieldset>
                    <legend className="sr-only">By Email</legend>
                    <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                      By Email
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="comments" className="font-medium text-gray-900">
                            Comments
                          </label>
                          <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="candidates" className="font-medium text-gray-900">
                            Candidates
                          </label>
                          <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="offers" className="font-medium text-gray-900">
                            Offers
                          </label>
                          <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                      Push Notifications
                    </legend>
                    <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-everything"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}