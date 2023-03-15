import { useState , Fragment } from 'react'
import { Dialog ,Popover, Transition} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, ArrowLeftOnRectangleIcon ,BellIcon ,CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import reactLogo from '../assets/react.svg'
import {
    WalletIcon ,
    UserCircleIcon ,
    CalendarDaysIcon ,
    GlobeAmericasIcon ,
    ChatBubbleLeftEllipsisIcon  ,
  } from '@heroicons/react/24/outline'
    
 
  const notificationdata = [
    {
      id: 1,
      content: 'Applied to',
      target: 'Front End Developer',
      href: '#',
      date: 'Sep 20',
      datetime: '2020-09-20',
      icon: UserIcon,
      iconBackground: 'bg-gray-400',
    },
    {
      id: 2,
      content: 'Advanced to phone screening by',
      target: 'Bethany Blake',
      href: '#',
      date: 'Sep 22',
      datetime: '2020-09-22',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 3,
      content: 'Completed phone screening with',
      target: 'Martha Gardner',
      href: '#',
      date: 'Sep 28',
      datetime: '2020-09-28',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
    },
    {
      id: 4,
      content: 'Advanced to interview by',
      target: 'Bethany Blake',
      href: '#',
      date: 'Sep 30',
      datetime: '2020-09-30',
      icon: HandThumbUpIcon,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 5,
      content: 'Completed interview with',
      target: 'Katherine Snyder',
      href: '#',
      date: 'Oct 4',
      datetime: '2020-10-04',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
    },
    {
        id: 6,
        content: 'Completed interview with',
        target: 'Katherine Snyder',
        href: '#',
        date: 'Oct 4',
        datetime: '2020-11-04',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      },
      {
        id: 7,
        content: 'Advanced to interview by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-blue-500',
      },
      {
        id: 8,
        content: 'Completed interview with',
        target: 'Katherine Snyder',
        href: '#',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      },
      {
          id: 9,
          content: 'Completed interview with',
          target: 'Katherine Snyder',
          href: '#',
          date: 'Oct 4',
          datetime: '2020-11-04',
          icon: CheckIcon,
          iconBackground: 'bg-green-500',
        }
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  const profileicondropdowndata = [
    { name: 'Profile', description: 'Edit Your Profile here ', href: '#', icon: UserCircleIcon  },
    { name: 'Bookings', description: 'Manage your Bookings and Plan with Calendar here', href: '#', icon: CalendarDaysIcon  },
    { name: 'Explore', description: "Explore your Favourite Influencers,Creators,Teachers ...here", href: '#', icon: GlobeAmericasIcon  },
    { name: 'Messages', description: 'Connect with Your Mentors Here', href: '#', icon: ChatBubbleLeftEllipsisIcon   },
    { name: 'Wallet', description: 'Manage your balance and Billing here', href: '#', icon: WalletIcon  },
  ]
  const profileiconbottombuttons = [
    { name: 'Log out', href: '/logout', icon: ArrowLeftOnRectangleIcon  },
    { name: 'Contact Us', href: '#', icon: PhoneIcon },
  ]

const headerbuttonsonleftdata = [
    { name: 'Write', href: '#' },
    { name: 'Become a Mentor', href: '/mentorsignup' },
  { name: 'Explore', href: '/explore' },
  
  
]

export default function Headerafterauth() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {headerbuttonsonleftdata.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Meet My Mentor</span>
          <img className="h-8 w-auto" src= {reactLogo} alt="" />
        </a>
        <div className="flex flex-1   justify-end     " >
          
             {/* /////////////////Notifications (bell icon ) logic + design --tw//////////////////////////////// */}
             <Popover className="relative   lg:flex  flex">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-0" style={{marginRight:"20px"}}>
        <span><BellIcon className="h-6 w-6 text-gray-500" /> </span>
         {/* ////////////////The svg of brll icon ////////////////////////////// */}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-[76%] px-4 w-full">
          <div className="w-96 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5  overflow-auto  " style={{maxHeight: " 50vh"}}>
             
              <a key="notifications_data"   className="block p-2  ">
              <div className="flow-root  ">
      <ul role="list" className="-mb-8">
        {notificationdata.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== notificationdata.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
              </a>
            
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
          {/* ////////////////end of notification icon logic + design////////////////////////////// */}
        
         {/* ////////////////Begning of profile icon design + logic////////////////////////////// */}
          <Popover className="relative   lg:flex  flex "  >
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-0">
      <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
         {/* ////////////////The svg for default avatar profile photo -replace this with user own img src////////////////////////////// */}
      </span>
         
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-[90%] px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5  w-full">
            <div className="p-4">
              {profileicondropdowndata.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {profileiconbottombuttons.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
     {/* ////////////////end of profile icon design + logic////////////////////////////// */}
        </div>
      </nav>

      {/* ////////////////begining  of burger menu for mobile  design + logic////////////////////////////// */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Meet my Mentor</span>
              <img
                className="h-8 w-auto"
                src={reactLogo}
                alt=""
              />
            </a>
            <div className="flex flex-1 justify-end">
              
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {headerbuttonsonleftdata.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
       {/* ////////////////end  of burger menu for mobile  design + logic////////////////////////////// */}
    </header>
  )
}
