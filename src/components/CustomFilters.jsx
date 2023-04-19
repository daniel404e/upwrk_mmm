import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

import { FunnelIcon } from "@heroicons/react/24/solid";
import CategoryFilter from "./CustomFilters/CategoryFilter";
import GenderFilter from "./CustomFilters/GenderFilter";
import LanguageFilter from "./CustomFilters/LanguageFilter";
import SocialFilter from "./CustomFilters/SocialFilter";
import VerificationFilter from "./CustomFilters/VerificationFilter";

export default function CustomFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClosePopover = (e) => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const ref = useDetectClickOutside({ onTriggered: handleClosePopover });

  return (
    <div
      className="relative mt-2   flex  items-center justify-start"
      style={{ width: "25%" }}
      ref={ref}
    >
      <Popover className="relative" style={{ display: "inline-block" }}>
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="rounded-md justify-self-start bg-white py-2.5 px-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Filter
          <FunnelIcon
            className="h-3.5 w-3.5 text-gray-500 ui-open:transform ui-open:rotate-180"
            style={{ display: "inline-block" }}
          />
        </button>

        <Transition
          style={{ display: isOpen ? "inherit" : "none" }}
          show={true}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 z-10 mt-16 flex w-screen max-w-min lg:-translate-x-[14%] max-[390px]:-translate-x-[22%] -translate-x-[19%] px-4  ">
            <div
              className="w-96 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5  overflow-auto  "
              style={{ maxHeight: " 50vh" }}
            >
              <CategoryFilter />

              <LanguageFilter />

              <GenderFilter />

              <SocialFilter />

              <VerificationFilter />

            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
