
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


 
 {/* /////////////////////that shit we deleted/////////////////////////////////////////////////////////////////////////// */}

 <div className="mt-10 sm:mt-0" >
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Notifications</h3>
              <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <fieldset>
                    <legend className="sr-only">By Email</legend>
                    <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                      By Email
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="comments" className="font-medium text-gray-900">
                            Comments
                          </label>
                          <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="candidates" className="font-medium text-gray-900">
                            Candidates
                          </label>
                          <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="offers" className="font-medium text-gray-900">
                            Offers
                          </label>
                          <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                      Push Notifications
                    </legend>
                    <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-everything"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
 {/* ///////////////////////thst shit we deleted/////////////////////////////////////////////////////////////////////////// */}
        
         
      </div>
    )
  }
  
  export default Generalerrorpage
  