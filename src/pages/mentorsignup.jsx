import { Outlet, Link } from "react-router-dom";
 
 
 
 
 
 

function Mentorsignuppage() {
 

    return (
      
      <div className="App">
        <div>
       
        <h1>Your three steps away from becomiong a Mentor</h1>
          
        
             
          <div style={{marginBottom:"10px"}}>
          <h2 style={{display:"inline-block" , marginRight:"10px"}}>Mentor Signup-Form </h2>
           
          <Link style={{color:"white"}} to={`../addservicesofferedduringonboarding`}> <button style={{marginRight:"10px"}} > Done </button></Link>
          </div>
          <Link style={{color:"white"}} to={`../#`}> <button style={{marginRight:"10px"}} > Back </button></Link>
        </div>
        
        
         
      </div>
    )
  }
  
  export default Mentorsignuppage
  