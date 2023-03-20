 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pageheading(props) {
  return (
    <div className="border-b border-gray-200 pb-5 " style={{marginTop:"5%"}}>
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <div className="sm:w-0 sm:flex-1">
          <h1 id="message-heading" className="text-base font-semibold leading-6 text-gray-900">
            {props.meetingname}
          </h1>
          <p className="mt-1 truncate text-sm text-gray-500">{props.meetingbookedtiming}</p>
        </div>

        <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
           Live
          </span>
        
        </div>
      </div>
    </div>
  )
}
 