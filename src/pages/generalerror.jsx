import { Fragment, useRef, useState } from 'react'
import timezoneslist from '../data/timezones.json'
import dayjs  from  'dayjs'

import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime  from  'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

dayjs.extend(customParseFormat)


export default function Example() {
  
 
  function calculateutctimeplusoffset( offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return   nd.toLocaleString();
}


function currentdatetimeintimezone(wantedtimezone)
{

  var offset1 =0

  timezoneslist.forEach((element,inddx) => {


    if(element.value == wantedtimezone)
    {
      offset1 = element.offset    

    }



    




    
  })


  return(calculateutctimeplusoffset(offset1))
 
}
         
 
function findoffsetbetweentimezones2(mentorprofiletzne,choosentzne)
{

  
  var  offset=0;
  timezoneslist.forEach((element,index) => {
         
   
               
        if(element.value == mentorprofiletzne)
        {
          offset = offset+ ( element.offset * (-1))

        }

        if(element.value == choosentzne)
        {
          offset = offset + element.offset 

        }
                

    
                          });



                          return(offset)




                        }



       


var selectedweekdayavaliablity123 = {
  "id": 3,
  "title": "Monday",
  "avaliablity": [
    {
        "fromtime": "6:00 am",
        "totime": "11:30 am"
    },
      {
          "fromtime": "5:00 pm",
          "totime": "9:30 pm"
      },
      {
          "fromtime": "10:30 pm",
          "totime": "11:30 pm"
      }
  ],
  "avaliable": true
}

 

var dateanddetails = {
  "id": 5,
  "month": "April",
  "monthinno": 3,
  "year": 2023,
  "day": 10,
  "weekday": "Monday",
  "date": "4/10/2023"
}


var selectedclienttzone123="India Standard Time"


var blockeddatearray = [
 
  {
      "_id": "642d3520d112f66e9b500ef8",
      "mentoruniqid": "3c31f10a0ca31133642188113ad1c917625fa4f3bc9aa54c64da4a01db91cf2a",
      "date": "2023-04-10T00:00:00.000Z",
      "datetime": [
        {
            "fromdatetime": "10-04-2023_06:00 AM",
            "todatetime": "10-04-2023_10:40 PM"
        },
         
          
      ],
      "timezone": "India Standard Time",
      "__v": 1
  },
  
]




function removeblockeddates(selectedweekdayavaliablityvar ,dateanddetailsvar ,selectedclienttzonevar,blockeddatearrayvar  )
{

const convertedselectedweekdayavaliablityafterblockeddate =  selectedweekdayavaliablityvar

function findoffsetbetweentimezones3(mentorprofiletzne,choosentzne)
{

  
  var  offset=0;
  timezoneslist.forEach((element,index) => {
         
   
               
        if(element.value == mentorprofiletzne)
        {
          offset = offset+ ( element.offset * (-1))

        }

        if(element.value == choosentzne)
        {
          offset = offset + element.offset 

        }
                

    
                          });



                          return(offset)




                        }

 
   

blockeddatearrayvar.forEach((element1,indxx1) => {  //loops thorough all blocked dates
            

  const  totaloffset=  findoffsetbetweentimezones3(element1.timezone,selectedclienttzonevar) 
  const totaloffsetinminutes = totaloffset *60
  // console.log("offset: "+totaloffsetinminutes )

  


 if(element1.datetime.length > 0){
  element1.datetime.forEach((element2,indxx2) => { // loops through all the times in the blocked dates


       var fromdatetimeinblockeddates =  dayjs( element2.fromdatetime,"DD-MM-YYYY_hh:mm A").add(totaloffsetinminutes,"minute").format("DD-MM-YYYY") //converted to selected timezone 
       
       var fromdatetimeinselecteddate = dayjs(dateanddetailsvar.date,"M/D/YYYY").format("DD-MM-YYYY")
                
           const f = dayjs( element2.fromdatetime,"DD-MM-YYYY_hh:mm A").add(totaloffsetinminutes,"minute").format("hh:mm a") 
           const t = dayjs( element2.todatetime,"DD-MM-YYYY_hh:mm A").add(totaloffsetinminutes,"minute").format("hh:mm a")

           if(fromdatetimeinblockeddates == fromdatetimeinselecteddate)   //if blocked date == selected date [overlap might exist] 
           {

              

             
            for (let indxx3 = 0; indxx3 < convertedselectedweekdayavaliablityafterblockeddate.avaliablity.length; indxx3++)  
 
              {
                const element3 = convertedselectedweekdayavaliablityafterblockeddate.avaliablity[indxx3];



              const fa = dayjs( element3.fromtime,"hh:mm a").format("hh:mm a") 
              const ta = dayjs( element3.totime,"hh:mm a").format("hh:mm a")


              const fminusfa = dayjs( f,"hh:mm a").diff( dayjs(fa,"hh:mm a"), 'minute')
              const tminusfa = dayjs( t,"hh:mm a").diff( dayjs(fa,"hh:mm a"), 'minute')
              const fminusta = dayjs( f,"hh:mm a").diff( dayjs(ta,"hh:mm a"), 'minute')
              const tminusta = dayjs( t,"hh:mm a").diff( dayjs(ta,"hh:mm a"), 'minute')
              
                
            


              if(fminusfa < 0 && (tminusfa <= 0 ) || (fminusta >= 0 ) && (tminusta >0) ) //no overlap exists
              {    
                
                   console.log("no overlap exists")
              }

              else if(fminusfa <= 0 && tminusta < 0)
              {
                var splitdatum ={
                    "fromtime":  t,
                    "totime":  ta
                }

                 
                convertedselectedweekdayavaliablityafterblockeddate.avaliablity[indxx3] =splitdatum
                 indxx3 = 0
                console.log("left end overlap exists")
                console.log(convertedselectedweekdayavaliablityafterblockeddate)
                  
              }
              else if(fminusfa > 0 && tminusta < 0)
              {   

                var splitdatum2 ={
                    "fromtime":  fa,
                    "totime":  f
                }
                
                var splitdatum25 ={

                    "fromtime":  t,
                    "totime":  ta

                }

                 
                convertedselectedweekdayavaliablityafterblockeddate.avaliablity[indxx3] =splitdatum2
                convertedselectedweekdayavaliablityafterblockeddate.avaliablity.push(splitdatum25)
                indxx3 = 0
                console.log("middle enclosed overlap exists")
                console.log(convertedselectedweekdayavaliablityafterblockeddate)

              }
              else if(fminusfa > 0 && tminusta >= 0)
              {

                var splitdatum3 ={
                    "fromtime":  fa,
                    "totime":  f
                }

                
                convertedselectedweekdayavaliablityafterblockeddate.avaliablity[indxx3] =splitdatum3
                 indxx3 = 0
                 console.log("right end overlap exists")
                console.log(convertedselectedweekdayavaliablityafterblockeddate)
              

              }
              else if(fminusfa <= 0 && tminusta >= 0)
              {  

                convertedselectedweekdayavaliablityafterblockeddate.avaliablity.splice(indxx3,1)  
                console.log(indxx3)
                 indxx3 = -1    
                 console.log(convertedselectedweekdayavaliablityafterblockeddate)
                 console.log("complete overlap exists")
              

              }
               
               
            
           };
    
          }
      
});
}

  
});


 


return(convertedselectedweekdayavaliablityafterblockeddate)

}



console.log(removeblockeddates(selectedweekdayavaliablity123 , dateanddetails , selectedclienttzone123 ,blockeddatearray))






  return (
    <div>
    

    </div>
  )
}
