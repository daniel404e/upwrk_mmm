import { Outlet, Link , redirect ,Navigate, Route, Routes, useNavigate  } from "react-router-dom";
import { useState , Fragment } from 'react'
import { Dialog ,Popover, Transition} from '@headlessui/react'
 
import { MagnifyingGlassCircleIcon , FunnelIcon ,InboxStackIcon ,LanguageIcon ,UserIcon ,CursorArrowRippleIcon ,CheckBadgeIcon  } from "@heroicons/react/24/solid";
import Select from 'react-select'


const categery = [
  { value: 'All Category', label: 'All Category',cbheading:"categeryselect"             },
  { value: 'Engineering', label: 'Engineering'  ,cbheading:"categeryselect"         },
  { value: 'Creator', label: 'Creator'          ,cbheading:"categeryselect"         }
]


const language = [ 
  {value: 0, label: 'All Languages' ,cbheading:"languageselect"        },
  { value: 1, label: 'English'      ,cbheading:"languageselect"         },
  { value: 2, label: 'Tamil'        ,cbheading:"languageselect"       },
  { value: 3, label: 'Hindi'        ,cbheading:"languageselect"       },
  { value: 4, label: 'Kanada'       ,cbheading:"languageselect"        },
  { value: 5, label: 'Telugu'       ,cbheading:"languageselect"                     },
  { value: 6, label: 'arabic'       ,cbheading:"languageselect"            },
  { value: 7, label: 'spanish'      ,cbheading:"languageselect"               },
  { value: 8, label: 'English'      ,cbheading:"languageselect"            },
  { value: 9, label: 'Tamil'        ,cbheading:"languageselect"            },
  { value: 10, label: 'Hindi'       ,cbheading:"languageselect"                 },
  { value: 11, label: 'Kanada'      ,cbheading:"languageselect"               },
  { value: 12, label: 'Telugu'      ,cbheading:"languageselect"            },
  { value: 13, label: 'arabic'      ,cbheading:"languageselect"          },
  { value: 14, label: 'spanish'     ,cbheading:"languageselect"          },
 
]


const gendersdata = [
  { id: 1, name: 'Male' ,checkstatus:false },
  { id: 2, name: 'Female' ,checkstatus:false },
  { id: 3, name: 'Non-Binary' ,checkstatus:false },
 
]
  

 

const allcheckboxes={ //and also react-select data
  
  gendersc:[
  { id: 1, name: 'Male' ,checkstatus:false },
  { id: 2, name: 'Female' ,checkstatus:false },
  { id: 3, name: 'Non-Binary' ,checkstatus:false },
      ]
      ,
      
   socials:[
    { id: 1, name: 'Instagram',checkstatus:false },
    { id: 2, name: 'Youtube'  ,checkstatus:false },
    { id: 3, name: 'Linkdin'  ,checkstatus:false },
    { id: 4, name: 'Twitter'  ,checkstatus:false },
    { id: 5, name: 'Facebook' ,checkstatus:false },
  ]   

  ,

   Verificationstatus :[
    { id: 1, name: 'Verified'     ,checkstatus:false},
    { id: 2, name: 'Not-Verified' ,checkstatus:false},
    
  ]
  ,

  categeryselect:{value: 'All Category', label: 'All Category'  } ,
  languageselect:{value: 'All Languages', label: 'All Languages'  }






}




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const [reactselectcatagoryselectedOption, setreactselectcatagoryselectedOption] = useState(null)

  const [reactselectlanguageselectedOption, setreactselectlanguageselectedOption] = useState(null)
  //allcheckboses is data-only ---but tracked on every change
 
  const[genderstate,setgenderstate]   = useState(allcheckboxes["gendersc"])
  const[socialsstate,setsocialsstate]   = useState(allcheckboxes["socials"])
  const[Verificationstate,setVerificationstate]   = useState(allcheckboxes["Verificationstatus"])  
  
  const[activeFiltersstate,setactiveFilters]   = useState([])  
 

  function renderactivefilters(allcheckboxestofilterdata)
  {
    const toloaddatatemp = [];
Object.entries(allcheckboxestofilterdata).forEach((entry) => {
  const [key, value] = entry;
  
  

  if (typeof value === 'object' && !Array.isArray(value) && value !== null) 
     {
      console.log("this is object  "+ value);
      if(value.label  !=  "All Category" && value.label  !=  "All Languages" ){
         toloaddatatemp.push(value) 
      }
       }

       if ( Array.isArray(value) && value !== null) 
     {
      
       
         value.forEach(element => {
          
          
            if(element.checkstatus == true)
            {
               
              toloaddatatemp.push({ value: element.name, label:  element.name ,cbheading: key})
               
            
            }

          
           
           


         });
    
       }

       setactiveFilters([...toloaddatatemp])  

       
 
});

  }





  function handelclickoncheckbox(nameofcheckbox,statusofcleckbox,labelofcheckbox)
  {
     
    
  
    // console.log(nameofcheckbox+" "+ statusofcleckbox +" " +labelofcheckbox )
     
     

//////////////////////////////////for checkboxes
      if ( Array.isArray(allcheckboxes[labelofcheckbox]) && allcheckboxes[labelofcheckbox] !== null) 
      {
                    
             allcheckboxes[labelofcheckbox].forEach((elem,index) => {
               if(elem.name == nameofcheckbox )
               {
                 allcheckboxes[labelofcheckbox][index].checkstatus=statusofcleckbox
                 
               }    
                                                 });

            }



if(labelofcheckbox == "gendersc")
{
  setgenderstate( [...allcheckboxes[labelofcheckbox] ])
}


if(labelofcheckbox == "socials")
{
  setsocialsstate( [...allcheckboxes[labelofcheckbox] ])
}


if(labelofcheckbox == "Verificationstatus")
{
  setVerificationstate( [...allcheckboxes[labelofcheckbox] ])
}
//////////////////////////////////for checkboxes---end

//////////////////////////////////react-Select
if(labelofcheckbox == "categeryselect")
{

  allcheckboxes[labelofcheckbox]={value: 'All Category', label: 'All Category'  }
  setreactselectcatagoryselectedOption({value: 'All Category', label: 'All Category'  }); 
 
    
}

if(labelofcheckbox == "languageselect")
{

  allcheckboxes[labelofcheckbox]={value: 'All Languages', label: 'All Languages'  }
  setreactselectlanguageselectedOption({value: 'All Languages', label: 'All Languages'  }); 
 
    
}
//////////////////////////////////react-Select---end

 console.log(allcheckboxes)
 

renderactivefilters(allcheckboxes)

         
  }




  //////////////////////////////////////////////////////////////////////
   

 



     

      
    const colourStyles = {
      control: (baseStyles) => ({
        ...baseStyles,
        borderRadius: "0.375rem",
        borderTopRightRadius:0,
         borderBottomRightRadius:0,
        borderRight:0,
        height:"40px" ,
        fontSize:"0.875rem",
        
        lineHeight: "1.25rem",
      }),
      menuList: styles => ({
        ...styles,
        background: 'white',
        borderRadius: "0.575rem",
     
        border:1,
        fontSize:"0.775rem",
      }),
      option: (styles, { isFocused, isSelected }) => ({
        ...styles,
       
        zIndex: 10,
      }),
      menu: base => ({
        ...base,
        zIndex: 100,
        
        
         
      }),
    }
    

 

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      
      
       
      <div className='flex justify-center   ' style={{marginBottom:"10px"}}  >
      <div className="   relative mt-2   flex  items-center justify-start  "  style={{  width:"25%" }}>

      <Popover className="   relative      " style={{display:"inline-block"}}>

      <Popover.Button
        type="button"
        
        className="rounded-md justify-self-start bg-white py-2.5 px-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
      Filter {' '}
      <FunnelIcon className="h-3.5 w-3.5 text-gray-500" style={{display:"inline-block"}} />
       
        
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
           <Popover.Panel className="absolute left-1/2 z-10 mt-16 flex w-screen max-w-min lg:-translate-x-[14%] max-[390px]:-translate-x-[22%] -translate-x-[19%] px-4  " >
          <div className="w-96 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5  overflow-auto  " style={{maxHeight: " 50vh"}}>
          
          {/*    //////////////////////////////////////////////catagory-select/////////////////////////////////////////////////////////// */}
          <legend className="text-base font-semibold leading-6 text-gray-900"><InboxStackIcon className="h-5 w-5 text-gray-500" style={{ display:"inline-block"}}/>Category </legend> 
           <Select className=" w-full   mt-2 text-gray-900 shadow-sm  border-0   " options={categery}   
    
  
    classNames="rounded-md"
    value={reactselectcatagoryselectedOption}
   // defaultValue={reactselectcatagoryselectedOption}
    placeholder="All Category"
    
   maxMenuHeight={200}
   onChange={(valo)=>{
    setreactselectcatagoryselectedOption(valo); 
    allcheckboxes["categeryselect"] = valo
    renderactivefilters(allcheckboxes)
        console.log(valo);
        
      }}
 
    />

{/* //////////////////////////////////////////////////////Language-select///////////////////////////////////////////////////// */}


<legend className="mt-4 text-base font-semibold leading-6 text-gray-900"><LanguageIcon className="h-5 w-5 text-gray-500" style={{ display:"inline-block"}} />Language </legend>
           <Select className=" w-full   mt-2 text-gray-900 shadow-sm  border-0   " options={language}   
    
  
    classNames="rounded-md"
     
     
    value={reactselectlanguageselectedOption}
    placeholder=" All Language"
   
    maxMenuHeight={200}
    onChange={(valo)=>{
    
 
    setreactselectlanguageselectedOption(valo)
    allcheckboxes["languageselect"] = valo
    
    renderactivefilters(allcheckboxes) 
      }}
     
  
    />



{/* /////////////////////////////////////////////////////////////gender/////////////////////////////////////////////////////////// */}
             <fieldset className="mt-4">
      <legend className="text-base font-semibold leading-6 text-gray-900"><UserIcon className="h-5 w-5 text-gray-500" style={{ display:"inline-block"}} />Genders </legend>
      <div className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
        {genderstate.map((person, personIdx) => (
           
          <div key={personIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label htmlFor={`person-${person.id}`} className="select-none font-medium text-gray-900">
                {person.name}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
            
              <input
                id={`person-${person.id}`}
                name={`person-${person.id}`}
                checked={person.checkstatus} 
                type="checkbox"
                key={person.name}  
                value={person.name}
                
                onChange={(e)=>{
                  
                  
                  
                  handelclickoncheckbox(e.target.value,e.target.checked,"gendersc")
                  
                  }}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        
        ))}
      </div>
    </fieldset>
{/*  ///////////////////////////////////////////////////Social-search//////////////////////////////////////////////////////////// */}

<fieldset className="mt-4">
      <legend className="text-base font-semibold leading-6 text-gray-900"><CursorArrowRippleIcon className="h-6 w-6 text-gray-500" style={{ display:"inline-block"}} />Social Search</legend>
      <div className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
        {socialsstate.map((socialsv, socialsIdx) => (
          <div key={socialsIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label htmlFor={`person-${socialsv.id}`} className="select-none font-medium text-gray-900">
                {socialsv.name}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={`person-${socialsv.id}`}
                name={`person-${socialsv.id}`}
                type="checkbox"
                checked={socialsv.checkstatus} 
                value={socialsv.name}
                onChange={(e)=>{handelclickoncheckbox(e.target.value,e.target.checked,"socials")}}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>

{/* ///////////////////////////////////////////////////////////Verification//////////////////////////////////////////////////////////////// */}

<fieldset className="mt-4">
      <legend className="text-base font-semibold leading-6 text-gray-900"><CheckBadgeIcon className="h-5 w-5 text-blue-500" style={{ display:"inline-block"}}  />Verification</legend>
      <div className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
        {Verificationstate.map((Verificationstatus, VerificationstatusIdx) => (
          <div key={VerificationstatusIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label htmlFor={`person-${Verificationstatus.id}`} className="select-none font-medium text-gray-900">
                {Verificationstatus.name}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={`person-${Verificationstatus.id}`}
                name={`person-${Verificationstatus.id}`}
                type="checkbox"
                value={Verificationstatus.name}
                checked={Verificationstatus.checkstatus} 
                onChange={(e)=>{handelclickoncheckbox(e.target.value,e.target.checked,"Verificationstatus")}}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          </div>
        </Popover.Panel>
      </Transition>
      </Popover>

       

      </div>
       
      <div className="relative mt-2 flex  items-center justify-center" style={{width:"55%"  }}> 
      {/* <select ><option>test</option><option>test2</option></select> */}
      <Select className="block w-2/12   text-gray-900 shadow-sm  border-0 max-[1050px]:hidden " options={categery}  styles={colourStyles} 
    
  
  classNames="rounded-md"
   
   
  placeholder="All"
  maxMenuHeight={500}
  value={reactselectcatagoryselectedOption}
        onChange={(valo)=>{
          allcheckboxes["categeryselect"] = valo
           
          setreactselectcatagoryselectedOption(valo); 
          allcheckboxes["categeryselect"] = valo
    renderactivefilters(allcheckboxes)
           console.log(allcheckboxes)
          
        }}
  components={{
    IndicatorSeparator: () => null
  }}
 
  />
        <input style={{  height:"40px" ,  borderLeft:0,borderTopLeftRadius:0,borderBottomLeftRadius:0, borderRight:0, }}
          type="text"
          name="search"
          id="search"
          placeholder="Search for mentors,creators,industry,sector..."
          className="block w-full  bg-white rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-2xl focus:scale-105 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        
         
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <button className="inline-flex items-center   border-0 px-1 font-sans text-xs text-gray-400 hover:bg-transparent "   >
          <MagnifyingGlassCircleIcon className="h-8 w-8 text-gray-300 hover:text-blue-500 hover:bg-transparent hover:scale-105 rounded-full hover:shadow" />
          </button>
        </div>
      </div>
    </div>

      {/* Filters */}



      {/* ///////////////////////////////////////////////////////////////Active filters/////////////////////// */}
      <section  className='flex items-center justify-center'>
                
        <div className="bg-gray-100 rounded-md " style={{width:"80%" }}>
          <div className="mx-auto max-w-7xl py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
            <h3 className="text-sm font-medium text-gray-500">
             Active Filters
              
            </h3>

            <div aria-hidden="true" className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />

            <div className="mt-2 sm:mt-0 sm:ml-4">
              <div className="-m-1 flex flex-wrap items-center">
                {activeFiltersstate.map((activeFilter) => (
                  <span
                    key={activeFilter.label}
                    className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                  >
                    <span>{activeFilter.label}</span>
                     
                    <button
                      type="button"
                      id="uniqbutto"
                      target={"uniqbutto"}
                      value={activeFilter.label}
                      cboxheading={activeFilter.cbheading}
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                       onClick={(e)=>{
                         console.log(e.target.getAttribute("cboxheading"))
                        if(e.target.getAttribute("cboxheading") != null)
                        {
                         handelclickoncheckbox(e.target.value,false, e.target.getAttribute("cboxheading"))
                        }


                       
                          
                      

                       }}
                    >
                       
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8" style={{pointerEvents:"none"}}>
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" style={{pointerEvents:"none"}}/>
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /////////////////////////////////////////end-filters///////////////////////////////////////////////////////////////////////// */}
    </div>
  )
}
