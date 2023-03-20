import { Outlet, Link } from "react-router-dom";
 
 
 
 
 
 

function Mentorprofileviewpage() {
 

    return (
      
      <div className="App">
        <div>
        <h1>Mentor Profile </h1>
         
          
          
             
          
          
        </div>
        <div>
         <h2> Mentor Details </h2>
        </div>
        <div>
         <h2> Education Qualifications </h2>
        </div>
        <div>
         <h2> Reviews </h2>
        </div>
        <div>
         <h2> Socials </h2>
        </div>
        <div>
         <h2> Packages / Services offered  </h2>
        </div>
        <div>
         <h2> Avaliable dates and time   </h2>
        </div>

        <div >
          <button style={{marginRight:"10px"}} > Book session/meating on date.time  </button> 
           
        </div>
        <div >
        <button style={{marginRight:"10px"}} > Back </button> 
        <button onClick={
               console.log("booking initiated")
               



        }  >BOOK</button>
           
        </div>
         
      </div>
    )
  }
  
  export default Mentorprofileviewpage
  