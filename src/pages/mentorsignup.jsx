import { Outlet, Link , redirect ,Navigate, Route, Routes, useNavigate  } from "react-router-dom";
import Personalinfocomp from '../components/personalinfomentorsignup.jsx'
import Profilesetupcomp from '../components/profilesetupmentorsignup.jsx'
import Addservicescomp from '../components/addservicesmentorsignupcomp.jsx'
import React, { useState , useEffect , Fragment} from 'react';
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

import { toast, ToastContainer } from 'react-toastify';

 


export default function Example() {


 const [whichpage,setpage] =useState("PERSONALINFO")

  const [pages,setcurrentpage] =useState( [
    { name: 'Personal Info',  current: true },
    { name: 'Profile Set-up',   current: false },
    { name: 'Add Services',   current: false },
  ])

  const [personalinfodata,setpersonalinfodata] =useState({})
  const [profilesetupdata,setprofilesetupdata] =useState({})


  function infofrompersonalinfocomp(alldata)
  {

    setpersonalinfodata(alldata)
    setpage("PROFILESETUP")
    setcurrentpage([
      { name: 'Personal Info',  current: false },
      { name: 'Profile Set-up',   current: true },
      { name: 'Add Services',   current: false },
    ])


    console.log(alldata)

  }


  function infofromprofilesetupcomp(alldata)
  {

    setprofilesetupdata(alldata)
    setpage("ADDSERVICES")
    setcurrentpage([
      { name: 'Personal Info',  current: false },
      { name: 'Profile Set-up',   current: false },
      { name: 'Add Services',   current: true },
    ])

      
    console.log("this is mentor signup page")
    console.log(alldata)

  }


  return (
      <div className="bg-gray-100 pb-96"  >

      {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
      
      {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
      
    <div className="container  mx-auto sm:px-6 lg:px-8  rounded-2xl "  >
    
    <div className="md:flex md:items-center md:justify-between">
    
      <div className="min-w-0 flex-1">
      
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight pt-4">
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
      

      {
        <Addservicescomp fname="joshua" lname="daniel" />
        
        // whichpage=="PERSONALINFO" ? <Personalinfocomp senddatatomentorsignup={infofrompersonalinfocomp}  /> :whichpage=="PROFILESETUP" ? <Profilesetupcomp fname={personalinfodata.fname} lname={personalinfodata.lname} ugender={personalinfodata.gender} senddatatomentorsignupnow={infofromprofilesetupcomp}  /> : whichpage=="ADDSERVICES"? <Addservicescomp/> : null 
        
        
        
        
        }


</div>


                      {/* /////////////////////////////////////////////////////////////////////////////// */}
                     
              {/* ///////////////////////////////////////////////////////////////////////////// */}
       


     

      <div className="hidden sm:block" aria-hidden="true" >
        <div className="py-5">
          <div className="border-t border-gray-200" />
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