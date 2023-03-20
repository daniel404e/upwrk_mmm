import { useState , Fragment ,useEffect} from 'react'
 

function Activefilterscomponent(props) {
     
    const allcheckboxestofilterdata = props.allcheckboxestofilterdatatochild;
              
    

    const[activeFiltersstate,setactiveFilters]   = useState([]) 
    
    
    useEffect(() => {
        
        const toloaddatatemp = [];
        Object.entries(allcheckboxestofilterdata).forEach((entry) => {
          const [key, value] = entry;
          
          
        
          if (typeof value === 'object' && !Array.isArray(value) && value !== null) 
             {
              
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
      }, [props.stateofactivefilters]);


    
       
   


     
 
    return (
      
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
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-300 hover:text-gray-500"
                       
                      onClick={(e)=>{
                         
                        if(e.target.getAttribute("cboxheading") != null)
                        {
                         props.onclickingxbutton(e.target.value,false, e.target.getAttribute("cboxheading"))
                        }


                       
                          
                      

                       }}  
                    >
                       
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8" style={{pointerEvents:"none"  }}>
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" style={{pointerEvents:"none" }}/>
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Activefilterscomponent
  