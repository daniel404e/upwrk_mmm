import { Outlet, Link , redirect ,Navigate, Route, Routes, useNavigate  } from "react-router-dom";
import React, { useState , useEffect} from 'react';

export default function Logoutpage() {

  const navigate = useNavigate();


  useEffect(() => {

        
    localStorage.clear();
    sessionStorage.clear();

     
     
    setTimeout(() => {
      navigate("/explore");
    }, 5000);

    
   
      
      
    
     }, [])


    return (
      <>
         
        <main className="relative isolate min-h-full">
          <img
            src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base h-8 w-8 font-semibold leading-8 text-white" style={{display:"inline-block" , fontSize:"35px"}} >:'(</p>
            <div className="flex items-center  " style={{display:"inline-block", marginLeft:"25px",marginTop:"155px"}}>
  <div
    class="inline-block h-8 w-8 animate-spin rounded-full text-neutral-100 border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
     
  </div>
</div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Logging you Out.</h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">Hope We Meet You Again Soon...</p>
            <p className="mt-4 text-base text-white/70 sm:mt-6" style={{display:"inline-block", marginLeft:"25px",marginTop:"1055px"}}>Bye.</p>
          </div>
           
            
          

        </main>
      </>
    )
  }
  