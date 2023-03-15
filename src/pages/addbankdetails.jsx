import { Outlet, Link } from "react-router-dom";
 
 
 

function Addbankdetailspage() {
 

    return (
      
      <div className="App">
        <div>
       
        <h1>Your ONE step away from becomiong a Mentor</h1>
          
        
             
          <div style={{marginBottom:"10px"}}>
          <h2 style={{display:"inline-block" , marginRight:"10px"}}>Bank Details Form</h2>
          <Link style={{color:"white"}} to={`../dashboard`}> <button style={{marginRight:"10px"}} > Done </button></Link>
          </div>
          <Link style={{color:"white"}} to={`../dashboard`}> <button style={{marginRight:"10px"}} > Skip </button></Link>
        </div>
        
        
         
      </div>
    )
  }
  
  export default Addbankdetailspage
  