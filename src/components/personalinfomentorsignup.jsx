import React, { useState , useEffect } from 'react';
import countries from '../data/countries.json'
import { toast, ToastContainer } from 'react-toastify';








function Personalinfo(props) {
           
  const [firstname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [phoneno,setphoneno]=useState("")     
  const [emailad,setemailad]=useState("")
  const [countryof,setcountryof]=useState("India")
  const [cityof,setcityof]=useState("")
  const [genderof,setgenderof]=useState("Male")
 
  function displaytoast()
{

  toast.warn( "Please fill in Required Fields ", {
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
 
    return (
      

     
      
                   
      
        <div className="mt-10 sm:mt-0 mb-5">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">Let's get started by entering your personal Information.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            
              <div className="overflow-hidden shadow rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <input
                        type="text"
                        onChange={(e)=>{setfirstname(e.target.value) }}
                        value={firstname}
                        placeholder="jane"
                        required    
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </label>
                      <input
                        type="text"
                        onChange={(e)=>{setlastname(e.target.value) }}
                        value={lastname}
                        required   
                        placeholder="Doe" 
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="phoneno" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone no
                      </label>
                      <input
                      placeholder="99-9999-9999" 
                      onChange={(e)=>{setphoneno(e.target.value) }}
                      value={phoneno}
                      type="tel"
                      required   
                      maxLength="10" 
                      minLength="10" 
                      title="Please enter exactly 10 digits" 
                        name="phoneno"
                        id="phoneno"
                        autoComplete="phone"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="phoneno" className="block text-sm font-medium leading-6 text-gray-900">
                        Gender
                      </label>
                      <select
                        id="country"
                        onChange={(e)=>{setgenderof(e.target.value) }}
                        value={genderof}
                        required   
                        name="gender"
                        placeholder="Male" 
                        autoComplete="gender"
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                 
                        <option key="Male">Male</option>
                        <option key="Female">Female</option>
                        <option key="Non-Binary">Non-Binary</option>

                      

                      
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <input
                      placeholder="janedoe@gmail.com" 
                      onChange={(e)=>{setemailad(e.target.value) }}
                      value={emailad}
                      required   
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                      </label>
                      <select
                        id="country"
                        onChange={(e)=>{setcountryof(e.target.value) }}
                        value={countryof}
                        required   
                        name="country"
                        placeholder="India" 
                        autoComplete="country-name"
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                      { 
                        countries.map((option,index)=> (
                        <option key={option.name}>{option.name}</option>
                    
                      ))  }

                      

                      
                      </select>
                    </div>

                    

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        onChange={(e)=>{setcityof(e.target.value) }}
                        value={cityof}
                        required   
                        id="city"
                        placeholder="Bengaluru" 
                        autoComplete="address-level2"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    
                     
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                     
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    onClick={(e)=>{
                           
                           var datatosend={
                             fname: firstname,
                             lname: lastname,
                             phno: phoneno,
                             emailid:emailad,
                             country:countryof,
                             gender:genderof,
                             city:cityof
                           }

                           if(datatosend.gender != "" && datatosend.fname != "" && datatosend.lname != ""  && datatosend.phno != ""&& datatosend.emailid != "" && datatosend.country != "" && datatosend.city != "")
                           {
                            console.log("datasent")

                            toast.success( "Personal Information Added.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

                            toast.success( "Dont Worry you will be able to edit these information later too.", {
      position: "top-center",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
                             props.senddatatomentorsignup(datatosend) 
                             
                           }
                           else  
                           {
                              
                            displaytoast()

                           }


                           console.log(datatosend)

                        e.preventDefault()

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
  
  export default Personalinfo
  