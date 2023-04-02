import { Fragment, useRef, useState } from 'react'
import timezoneslist from '../data/timezones.json'
import dayjs  from  'dayjs'

import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime  from  'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

dayjs.extend(customParseFormat)


export default function Example() {
  
  

 const weeklyavaliablityparam= [
    {
        "id": 1,
        "title": "Saturday",
        "avaliablity": [
            {
                "fromtime": "07:00 am",
                "totime": "10:00 am"
            },
            {
                "fromtime": "10:00 am",
                "totime": "01:00 pm"
            },
            {
                "fromtime": "03:00 pm",
                "totime": "05:30 pm"
            }
        ],
        "avaliable": true
    },
    {
        "id": 2,
        "title": "Sunday",
        "avaliablity": [
            {
                "fromtime": "10:30 pm",
                "totime": "11:30 pm"
            }
        ],
        "avaliable": true
    },
    {
        "id": 3,
        "title": "Monday",
        "avaliablity": [
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
    },
    {
        "id": 4,
        "title": "Tuesday",
        "avaliablity": [
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
    },
    {
        "id": 5,
        "title": "Wednesday",
        "avaliablity": [
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
    },
    {
        "id": 6,
        "title": "Thursday",
        "avaliablity": [
            {
                "fromtime": "07:00 am",
                "totime": "10:00 am"
            }
        ],
        "avaliable": true
    },
    {
        "id": 7,
        "title": "Friday",
        "avaliablity": [
            {
                "fromtime": "08:00 pm",
                "totime": "11:30 pm"
            }
        ],
        "avaliable": true
    }
]


function  convertavaliablitytotimezone(weeklyavaliablity ,mentorprofiletimezone ,choosentimezone)
{


var convertedweeklyavaliablity =[
  {
  "id": 1,
  "title": "Saturday",
  "avaliablity": [
      
  ],
  "avaliable": true
},
{
  "id": 2,
  "title": "Sunday",
  "avaliablity": [
      
  ],
  "avaliable": true
},
{
  "id": 3,
  "title": "Monday",
  "avaliablity": [  ],
  "avaliable": true
},
{
  "id": 4,
  "title": "Tuesday",
  "avaliablity": [
       
  ],
  "avaliable": true
},
{
  "id": 5,
  "title": "Wednesday",
  "avaliablity": [
      
  ],
  "avaliable": true
},
{
  "id": 6,
  "title": "Thursday",
  "avaliablity": [
     
  ],
  "avaliable": true
},
{
  "id": 7,
  "title": "Friday",
  "avaliablity": [
    
  ],
  "avaliable": true
}
]





function findoffsetbetweentimezones(mentorprofiletzne,choosentzne)
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



          const  totaloffset=  findoffsetbetweentimezones(mentorprofiletimezone,choosentimezone) 
           const totaloffsetinminutes = totaloffset *60
           console.log("offset: "+totaloffsetinminutes )


           if(totaloffset < 0) //if totaloffset is negative
           {

            weeklyavaliablity.forEach((element,index) => {  //index goes 0-6
                      
              if(element.avaliable)
              {
                  element.avaliablity.forEach((elem,indx)=>{

                     
                    var durfrom12amforfromtime =   dayjs( elem.fromtime, "hh:mm-a"  ).diff(dayjs( "12:00 am", "hh:mm-a"  ), 'minute')
                    var  durfrom12amfortotime =   dayjs( elem.totime, "hh:mm-a"  ).diff(dayjs( "12:00 am", "hh:mm-a"  ), 'minute')
                      
                    if ((totaloffsetinminutes*(-1))  > durfrom12amforfromtime && totaloffsetinminutes*(-1)  > durfrom12amfortotime )
                    {   
                    
                     var convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  

                     var convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  
                    
                    var idtoinsert = element.id - 1

                    if(idtoinsert == 0)
                    {
                      idtoinsert = 7

                    }


                    convertedweeklyavaliablity[idtoinsert - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": convertedtotime })


                    
                    console.log("complete time chunk needs to be shifted")
                    }

                    else if ((totaloffsetinminutes*(-1))  > durfrom12amforfromtime && totaloffsetinminutes*(-1)  <  durfrom12amfortotime)
                    {

                      var convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  

                      var convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  
                     
                     var idtoinsertforfrom = element.id - 1
                     var idtoinsertforto =  element.id 
                     if(idtoinsertforfrom == 0)
                     {
                      idtoinsertforfrom = 7
 
                     }
 
 
                     convertedweeklyavaliablity[idtoinsertforfrom - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": "11:59 pm" })
                     convertedweeklyavaliablity[idtoinsertforto -1 ].avaliablity.push({ "fromtime": "12:00 am", "totime": convertedtotime })


                          
                      console.log("  time chunk needs to be parted and shifted")

                    }
                    else if ((totaloffsetinminutes*(-1))  < durfrom12amforfromtime && totaloffsetinminutes*(-1)  <  durfrom12amfortotime)
                    {

                      const convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  

                      const convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).subtract((totaloffsetinminutes*(-1)), 'minute').format("hh:mm a").toString()  
                     
                     const idtoinsert = element.id  
 
                      
 
 
                     convertedweeklyavaliablity[idtoinsert - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": convertedtotime })
                          
                      console.log("  no shifting needed just subtract offset")

                    }




                  })
              }
                        


            })





               
           }

           else if (totaloffset > 0) //if totaloffset is positive
           {
                 
            weeklyavaliablity.forEach((element,index) => {  //index goes 0-6
                      
              if(element.avaliable)
              {
                  element.avaliablity.forEach((elem,indx)=>{

                     
                    var durfrom12amforfromtime =   dayjs( "11:59 pm", "hh:mm-a"  ).diff(dayjs( elem.fromtime, "hh:mm-a"  ), 'minute')
                    var  durfrom12amfortotime =   dayjs( "11:59 pm", "hh:mm-a"  ).diff(dayjs( elem.totime, "hh:mm-a"  ), 'minute')
                      console.log("duration: "+durfrom12amforfromtime +" "+ durfrom12amfortotime)
                    if ((totaloffsetinminutes)  > durfrom12amforfromtime && totaloffsetinminutes   > durfrom12amfortotime )
                    {   
                    
                     var convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  

                     var convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  
                    
                    var idtoinsert = element.id + 1

                    if(idtoinsert == 8)
                    {
                      idtoinsert = 1

                    }


                    convertedweeklyavaliablity[idtoinsert - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": convertedtotime })


                    
                    console.log("complete time chunk needs to be shifted")
                    }

                    else if ((totaloffsetinminutes)  < durfrom12amforfromtime && totaloffsetinminutes  >  durfrom12amfortotime)
                    {

                      var convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  

                      var convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  
                     
                     var idtoinsertforfrom = element.id 
                     var idtoinsertforto =  element.id + 1 
                     if(idtoinsertforto == 8)
                     {
                      idtoinsertforto = 1
 
                     }
 
 
                     convertedweeklyavaliablity[idtoinsertforfrom - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": "11:59 pm" })
                     convertedweeklyavaliablity[idtoinsertforto -1 ].avaliablity.push({ "fromtime": "12:00 am", "totime": convertedtotime })


                          
                      console.log("  time chunk needs to be parted and shifted")

                    }
                    else if ((totaloffsetinminutes)  < durfrom12amforfromtime && totaloffsetinminutes  <  durfrom12amfortotime)
                    {

                      const convertedfromtime =  dayjs( elem.fromtime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  

                      const convertedtotime =   dayjs( elem.totime, "hh:mm-a"  ).add((totaloffsetinminutes), 'minute').format("hh:mm a").toString()  
                     
                     const idtoinsert = element.id  
 
                      
 
 
                     convertedweeklyavaliablity[idtoinsert - 1].avaliablity.push({ "fromtime": convertedfromtime, "totime": convertedtotime })
                          
                      console.log("  no shifting needed just subtract offset")

                    }




                  })
              }
                        


            })

           }


           else if(totaloffset == 0)
           {
            convertedweeklyavaliablity = weeklyavaliablity
           }




           return(convertedweeklyavaliablity)

          }


         console.log( convertavaliablitytotimezone(weeklyavaliablityparam , "India Standard Time" , "India Standard Time"))
                  


  return (
    <div>
    

    </div>
  )
}
