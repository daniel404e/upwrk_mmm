
import authbeforepage from '../components/auth.js'
import { IKImage, IKVideo, IKContext, IKUpload } from 'imagekitio-react'
import {useState} from "react"
import  axios from 'axios'
import { ColorRing } from  'react-loader-spinner'


 

function Generalerrorpage() {
  const urlEndpointimg = 'https://ik.imagekit.io/4ryrtmmbd';
const publicKey = 'public_aA3rhul/456F8yR7a10I+vvAxk8='; 
 //const server = "https://165.232.114.169:4100"
 const server ="http://localhost:4100"
const authenticationEndpoint = server+'/signatureimage';



  const [file2, setFile] = useState('');
  const [imgstateb, setimgstateb] = useState('');
  const [imgfileid, setimgfileid] = useState('');
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files) {
       
      if(    e.target.files[0] && e.target.files[0]['type'].split('/')[0] === 'image')
      {
        setFile(e.target.files[0]);

        handleUploadFile(e.target.files[0])
         
      }
      else{
            
        alert("please upload only images")
      }
     
    }
  };

  const handleUploadFile = (filetoup) => {

    console.log("inside upload click")
    if (!filetoup) {
      return;
    }

  

    console.log("i madew it bbba")

    
    fetch(server+'/imgauth', {
      method: 'GET',
      })
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(false)
        console.log(data)
        const tosenddata= new FormData()

        tosenddata.append("file",filetoup)
        tosenddata.append("publicKey",publicKey)
        tosenddata.append("signature",data.signature)
        tosenddata.append("expire",data.expire)  
        tosenddata.append("token",data.token)  
        tosenddata.append("fileName","sqwesaa")  
    
        console.log(tosenddata)
        axios.post('https://upload.imagekit.io/api/v1/files/upload', tosenddata,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const progress = (progressEvent.loaded / progressEvent.total) * 100;
            setProgress(progress);
          }
        })
      .then((res2) => {
        
        console.log(res2.data.fileId)
        setimgstateb(res2.data.url)
      
      })
        
      .catch((err2) => console.error(err2));

          
      
      
      
      })
      .catch((err) => console.error(err));
  };


   
  







 
 
    return (
      
      <div  >
  
<div className="relative flex justify-center   mt-20  mb-28">
                      <div key={123} className="   " style={{width:"250px" , height:"274px"}}>
                <div className="relative ">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg   ">
                     
                  <ColorRing
  visible={!isLoaded}
  height="40"
  width="40"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  
  wrapperClass="blocks-wrapper absolute z-50"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>





                    <img
                      src={(imgstateb)?imgstateb+"/tr:w-600,h-700,fo-auto" : "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"}
                      alt={"https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"}
                      className="h-full w-full object-cover object-center  "
                      onLoad={() => {
          setIsLoaded(true);
        }}

                    />



                   
                  </div>
                  
         <div className="  bg-gray-200  h-2.5 dark:bg-gray-700 " style={{width: String(progress)+"%" ,display: (progress ==0 || progress==100)? "none":"block" }}>
  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: String(progress)+"%" ,display: (progress ==0 || progress==100)? "none":"block"}}></div>
</div>
                  


                  <div className="relative mt-4 " style={{maxHeight:"50px"}}>
                    <h3 className="text-md font-medium text-gray-900">Your Title /  Expertise</h3>
                    <p className="mt-1 text-sm text-gray-500">Your Pitch Line......</p>
                  </div>
                  
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-70 hover:opacity-40 transition-opacity duration-300 "  
                       
                    />
                    <p className="relative text-lg font-semibold text-white ">Your Name</p>
                  </div>
                </div>
                <div className="mt-6">
                   
                </div>
              </div>
              </div>
<input type="file" accept="image/*" onChange={handleFileChange} />


 

{/* <button onClick={handleUploadClick}>Save</button> */}
{/* <button onClick={}>Delete</button> */}
        
         
      </div>
    )
  }
  
  export default Generalerrorpage
  