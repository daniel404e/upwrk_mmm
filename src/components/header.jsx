import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import reactLogo from '../assets/react.svg'

const navigation = [
  { name: 'Explore all Mentors', href: './explore' },
  { name: 'Become a Mentor', href: './mentorsignup' },
   { name: 'write', href: '#' },
//   { name: 'Company', href: '#' },
]

export default function Headercomponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto  max-w-7xl flex  items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={reactLogo} alt="" />
            
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#FF6050] ">
         
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          
          <a
            href="./signup"
            className="rounded-full bg-indigo-100 py-2 px-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-200"
          >
            Sign Up
          </a>

          <a href="./login" className="hidden rounded-full py-1 px-2 lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900   hover:text-[#FF6050] ">
            Log in  <span aria-hidden="true">&rarr;</span>
          </a>
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
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={reactLogo} alt="" />
            </a>
            <a
              href="./signup"
              className="ml-auto rounded-full bg-indigo-100 py-2 px-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-200"
            >
              Sign up
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="./login"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
            
          </div>
          
        </Dialog.Panel>
        
      </Dialog>
      <hr style={{ width:"30%" , marginLeft:"35%" , color:"black"}} ></hr>

     

    </header>
  )
}
