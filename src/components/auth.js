import React, { useEffect } from 'react';
 
 
 
 

async function Authbeforeeverypage() {
  //const server = "https://165.232.114.169:4100"
   const server ="http://localhost:4100"

  const email_id =  localStorage.getItem('uname');

  const pswd =  localStorage.getItem('pswd');

  const sessionauth = sessionStorage.getItem("AUTH");
  
  var Auth_State = 0;
 
 

       
     
        if((email_id != null) && (pswd != null) && (sessionauth != null) )
        {
          Auth_State = 1;
            
        }

       else if((email_id != null) && (pswd == null) && ((sessionauth != null) || (sessionauth == null)) )
        {
          localStorage.clear();
          sessionStorage.clear()
          Auth_State = 0;
          console.log("no p ")
            
        }

        else if((email_id == null) && (pswd != null) && ((sessionauth != null) || (sessionauth == null)) )
        {
          localStorage.clear();
          sessionStorage.clear()
          Auth_State = 0;
          console.log("no e")
            
        }
        else  if((email_id == null) && (pswd == null) &&  (sessionauth == null)   )
        {

          console.log("no ntn ")
          
          localStorage.clear();
          sessionStorage.clear()
          Auth_State = 0;
            
        }

       else  if((email_id != null) && (pswd != null) &&  (sessionauth == null)   )
        {

          console.log("no ath ")
          //call db
         // Auth_State = 0;
         const toauthdata = {Email_id:email_id , Password:pswd}
          
            await   fetch(server+"/loginform", {
     
         // Adding method type
         method: "POST",
          
         // Adding body or contents to send
         body: JSON.stringify(toauthdata),
          
         // Adding headers to the request
         headers: {
             "Content-type": "application/json; charset=UTF-8"
         }
       })
       
       // Converting to JSON
       .then(response =>  response.json()) 
       
       .then((json) => { 
         
       console.log(json.responsefrmserv)
       if(json.responsefrmserv == "User_Does_Not_Exist")
  {
    Auth_State = 0;
    localStorage.clear();
    sessionStorage.clear()
    
  }
  
  if(json.responsefrmserv == "User_Duplicate_Exists")
  {    
    Auth_State = 0;
    localStorage.clear();
    sessionStorage.clear();
    
  }
  
  if(json.responsefrmserv == "User_Authenticated")
  {
    Auth_State = 1;
    sessionStorage.setItem("AUTH", "true");
    sessionStorage.setItem('uniqid', json.uniqueIDfromserv);
  }
  
   
  if(json.responsefrmserv == "Password_Does_Not_Match")
  {
    Auth_State = 0;
    localStorage.clear();
    sessionStorage.clear();
     
  }
  
  if(json.responsefrmserv == "Default_Error")
  {
    Auth_State = 0;
    localStorage.clear();
    sessionStorage.clear();
     
  }
       })


            
        }
     
        else
        {
          Auth_State = -1;
        }
         
 

        
      const respprint =  await  Auth_State


    return (
      
      respprint
    )
  }
  
  export default Authbeforeeverypage  
  