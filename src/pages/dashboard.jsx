import { Outlet, Link } from "react-router-dom";
 
 
 
 
 

function Dashboardpage() {
 

    return (
      
      <div className="App">
        <div>
        <h1>Dashboard</h1>
         
          
        <div >
       
        <Link style={{color:"white"}} to={`../explore`}> <button style={{marginRight:"10px"}} > Back </button></Link>
      <Link style={{color:"white"}} to={`../dashboard`}> <button style={{marginRight:"10px"}} > Dashboard </button></Link>
       <button style={{marginRight:"10px"}} > Notifications </button> 
       <button style={{marginRight:"10px"}} > Profile Icon </button> 
      
          
        </div>
             
           <div>
        <Link style={{color:"white"}} to={`../#`}> <button style={{marginBottom:"10px"}} > Profile </button></Link>
        </div>
        <div>
        <Link style={{color:"white"}} to={`../#`}> <button style={{marginBottom:"10px"}} > Services Offered </button></Link>
        </div>
        <div>
        <Link style={{color:"white"}} to={`../#`}> <button style={{marginBottom:"10px"}} > Bookings </button></Link>
        </div>
        <div>
        <Link style={{color:"white"}} to={`../explore`}> <button style={{marginBottom:"10px"}} > Explore </button></Link>
        </div>
        <div>
        <Link style={{color:"white"}} to={`../#`}> <button style={{marginBottom:"10px"}} > Messages </button></Link>
        </div>
        <div>
        <Link style={{color:"white"}} to={`../#`}> <button style={{marginBottom:"10px"}} > Wallet & payments </button></Link>
        </div>
        <div>
        <Link style={{color:"white"}} to={`../mentorsignup`}> <button style={{marginBottom:"10px"}} > + Become a mentor </button></Link>
        </div>

        </div>
        
        
         
      </div>
    )
  }
  
  export default Dashboardpage
  