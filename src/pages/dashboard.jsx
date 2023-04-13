import { Fragment, useState ,useEffect} from 'react'
import { Outlet, Link , redirect ,Navigate, Route, Routes, useNavigate  } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { useParams } from "react-router";
import reactLogo from '../assets/react.svg'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon ,
  ChatBubbleLeftRightIcon ,
  UsersIcon,
  UserCircleIcon  ,
  ClipboardDocumentListIcon ,
  XMarkIcon,
  CreditCardIcon 
} from '@heroicons/react/24/outline'
import authbeforepage from '../components/auth.js'
import Booking from '../components/bookingscomponent.jsx'
 


const teams = [
  { id: 1, name: 'Explore', href: '/explore', initial: 'E', current: false },
  { id: 2, name: 'Become a mentor', href: '/mentorsignup', initial: 'M', current: false },
   
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




 




export default function Example() {

  let { whichtab } = useParams();

   

    const [navigation,setnavigation] = useState([
      {id:1, name: 'Profile', href: '#', icon: UserCircleIcon , current: true },
      {id:2, name: 'Services Offered', href: '#', icon: ClipboardDocumentListIcon , current: false },
      {id:3, name: 'Bookings', href: '#', icon: CalendarDaysIcon , current: false },
      {id:4, name: 'Messages', href: '#', icon: ChatBubbleLeftRightIcon , current: false },
      {id:5, name: 'Wallet & payments ', href: '#', icon: CreditCardIcon , current: false },
    ])


 

 

 
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [meetingpageauthstate, setmeetingpageauthstate] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
                     
    authbeforepage().then((resultofprms)=>{

      const authstate =resultofprms
      console.log("this is authstate"+"  "+authstate)
      if( authstate == 1)
   {
     
       setmeetingpageauthstate(1);
     
   }
   else
   {
       setmeetingpageauthstate(0);

       navigate("/login");
   }
      
      
    
    })


    if(whichtab == "bookings")
    {



      setnavigation( [
        {id:1, name: 'Profile', href: '#', icon: UserCircleIcon , current: false },
        {id:2, name: 'Services Offered', href: '#', icon: ClipboardDocumentListIcon , current: false },
        {id:3, name: 'Bookings', href: '#', icon: CalendarDaysIcon , current: true },
        {id:4, name: 'Messages', href: '#', icon: ChatBubbleLeftRightIcon , current: false },
        {id:5, name: 'Wallet & payments ', href: '#', icon: CreditCardIcon , current: false },
      ]
      )


    }
    else  if(whichtab == "profile")
    {



      setnavigation( [
        {id:1, name: 'Profile', href: '#', icon: UserCircleIcon , current: true },
        {id:2, name: 'Services Offered', href: '#', icon: ClipboardDocumentListIcon , current: false },
        {id:3, name: 'Bookings', href: '#', icon: CalendarDaysIcon , current: false },
        {id:4, name: 'Messages', href: '#', icon: ChatBubbleLeftRightIcon , current: false },
        {id:5, name: 'Wallet & payments ', href: '#', icon: CreditCardIcon , current: false },
      ]
      )


    }

    else  if(whichtab == "serviceoffered")
    {



      setnavigation( [
        {id:1, name: 'Profile', href: '#', icon: UserCircleIcon , current: false },
        {id:2, name: 'Services Offered', href: '#', icon: ClipboardDocumentListIcon , current: true },
        {id:3, name: 'Bookings', href: '#', icon: CalendarDaysIcon , current: false },
        {id:4, name: 'Messages', href: '#', icon: ChatBubbleLeftRightIcon , current: false },
        {id:5, name: 'Wallet & payments ', href: '#', icon: CreditCardIcon , current: false },
      ]
      )


    }


    else  if(whichtab == "messages")
    {



      setnavigation( [
        {id:1, name: 'Profile', href: '#', icon: UserCircleIcon , current: false },
        {id:2, name: 'Services Offered', href: '#', icon: ClipboardDocumentListIcon , current: false },
        {id:3, name: 'Bookings', href: '#', icon: CalendarDaysIcon , current: false },
        {id:4, name: 'Messages', href: '#', icon: ChatBubbleLeftRightIcon , current: true },
        {id:5, name: 'Wallet & payments ', href: '#', icon: CreditCardIcon , current: false },
      ]
      )


    }


    else  if(whichtab == "walletpayment")
    {



      setnavigation( [
        {id:1, name: 'Profile', href: '#', icon: UserCircleIcon , current: false },
        {id:2, name: 'Services Offered', href: '#', icon: ClipboardDocumentListIcon , current: false },
        {id:3, name: 'Bookings', href: '#', icon: CalendarDaysIcon , current: false },
        {id:4, name: 'Messages', href: '#', icon: ChatBubbleLeftRightIcon , current: false },
        {id:5, name: 'Wallet & payments ', href: '#', icon: CreditCardIcon , current: true },
      ]
      )


    }

    

   
   
  
   
   
  
  }, []);




  return (
    <>
      
      <div >
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src={reactLogo}
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <button
                                  // href={item.href}
                                  value={item.id}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50 text-indigo-600 w-full'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50 w-full',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                  onClick={(e)=>{

                                    var editdatatoload =navigation

                            editdatatoload.forEach((element,index) => {
                                       
                                        editdatatoload[index].current = false
                                  
                                 });

                               editdatatoload[e.target.value - 1].current = true


                               setnavigation([...editdatatoload])


                               setSidebarOpen(false)

                                 
                            console.log(e.target.value)   

                                 
                                    


                                  }}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">Quick Links</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? 'text-indigo-600 border-indigo-600'
                                        : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src={reactLogo}
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <button
                        value={item.id}
                          // href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-indigo-600  w-full'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50  w-full',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                          onClick={(e)=>{

                            var editdatatoload =navigation

                            editdatatoload.forEach((element,index) => {
                                       
                                        editdatatoload[index].current = false
                                  
                                 });

                               editdatatoload[e.target.value - 1].current = true


                               setnavigation([...editdatatoload])




                                 
                            console.log(e.target.value)
                                 
                                 
                                 
                                 }}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Quick Links</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'text-indigo-600 border-indigo-600'
                                : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                     
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
          <a  >
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
          {/* /////////////////////////////////your content/////////////////////////////////////////////////////// */}
                        
              {  (navigation[2].current == true  )?  <Booking/> : null }

          {/* /////////////////////////////////your-content//////////////////////////////////////////////////////// */}
          
          


          
          
          </div>
        </main>
      </div>
    </>
  )
}
