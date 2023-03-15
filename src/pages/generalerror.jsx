
import authbeforepage from '../components/auth.js'
 
 
 

function Generalerrorpage() {


       
  authbeforepage().then((rlt)=>{
      console.log(rlt)
       })
     
 
    return (
      
      <div  >
                   
        <div>
       
        <h1>OOPS...page not avaliable :(...</h1>
          
        
             
         
          <button style={{marginBottom:"10px"}} >
            Go-back
          </button>
        </div>
        
        
         
      </div>
    )
  }
  
  export default Generalerrorpage
  