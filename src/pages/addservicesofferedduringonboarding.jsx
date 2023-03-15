import { Outlet, Link } from "react-router-dom";
 
 
 
 
 
 

function Addservicesofferedpage() {
 

    return (
      
      <div className="App">
        <div>
       
        <h1>Your two steps away from becomiong a Mentor</h1>
          
        
             
          <div style={{marginBottom:"10px"}}>
           
          <button  >
            Add New Package / service
          </button>
          </div>
          <Link style={{color:"white"}} to={`../addbankdetails`}> <button style={{marginRight:"10px"}} > Done </button></Link>
           
          
        </div>
        
        
         
      </div>
    )
  }
  
  export default Addservicesofferedpage
  