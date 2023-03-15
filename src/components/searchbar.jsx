import { Outlet, Link , redirect ,Navigate, Route, Routes, useNavigate  } from "react-router-dom";
 
import { MagnifyingGlassCircleIcon , FunnelIcon  } from "@heroicons/react/24/solid";
 
 
const activeFilters = [{ value: 'objects', label: 'Objects' }, { type: 'accounts', label: 'accounts' }]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      
      
       
      <div className='flex justify-center   ' style={{marginBottom:"10px"}}  >
      <div className="   relative mt-2     "  style={{  width:"30%" }}>

      <button
        type="button"
        
        className="rounded-md justify-self-start bg-white py-2.5 px-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
      Filter {' '}
      <FunnelIcon className="h-3.5 w-3.5 text-gray-500" style={{display:"inline-block"}} />
       
        
      </button>

      </div>
       
      <div className="relative mt-2 flex items-center justify-center" style={{width:"50%"  }}> 
        <input style={{  height:"40px" }}
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
      <section  className='flex items-center justify-center'>
         

   

        {/* Active filters */}
        <div className="bg-gray-100 rounded-md " style={{width:"80%" }}>
          <div className="mx-auto max-w-7xl py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
            <h3 className="text-sm font-medium text-gray-500">
              Filters
              
            </h3>

            <div aria-hidden="true" className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />

            <div className="mt-2 sm:mt-0 sm:ml-4">
              <div className="-m-1 flex flex-wrap items-center">
                {activeFilters.map((activeFilter) => (
                  <span
                    key={activeFilter.value}
                    className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                  >
                    <span>{activeFilter.label}</span>
                    <button
                      type="button"
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                    >
                       
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
