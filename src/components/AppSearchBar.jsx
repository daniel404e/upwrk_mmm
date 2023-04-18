import { Popover, Transition } from "@headlessui/react";
import { Fragment, useCallback, useState } from "react";

import {
  CheckBadgeIcon,
  CursorArrowRippleIcon,
  FunnelIcon,
  InboxStackIcon,
  LanguageIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Select from "react-select";
import { category } from "../../constants";
import CustomSearchBox from "./CustomSearchBox";
import ActiveFiltersComponent from "./activefilters";

const language = [
  { value: 0, label: "All Languages", cbheading: "languageselect" },
  { value: 1, label: "English", cbheading: "languageselect" },
  { value: 2, label: "Tamil", cbheading: "languageselect" },
  { value: 3, label: "Hindi", cbheading: "languageselect" },
  { value: 4, label: "Kanada", cbheading: "languageselect" },
  { value: 5, label: "Telugu", cbheading: "languageselect" },
  { value: 6, label: "arabic", cbheading: "languageselect" },
  { value: 7, label: "spanish", cbheading: "languageselect" },
  { value: 8, label: "English", cbheading: "languageselect" },
  { value: 9, label: "Tamil", cbheading: "languageselect" },
  { value: 10, label: "Hindi", cbheading: "languageselect" },
  { value: 11, label: "Kanada", cbheading: "languageselect" },
  { value: 12, label: "Telugu", cbheading: "languageselect" },
  { value: 13, label: "arabic", cbheading: "languageselect" },
  { value: 14, label: "spanish", cbheading: "languageselect" },
];

const allcheckboxes = {
  //and also react-select data

  gendersc: [
    { id: 1, name: "Male", checkstatus: false },
    { id: 2, name: "Female", checkstatus: false },
    { id: 3, name: "Non-Binary", checkstatus: false },
  ],
  socials: [
    { id: 1, name: "Instagram", checkstatus: false },
    { id: 2, name: "Youtube", checkstatus: false },
    { id: 3, name: "Linkdin", checkstatus: false },
    { id: 4, name: "Twitter", checkstatus: false },
    { id: 5, name: "Facebook", checkstatus: false },
  ],

  Verificationstatus: [
    { id: 1, name: "Verified", checkstatus: false },
    { id: 2, name: "Not-Verified", checkstatus: false },
  ],
  categeryselect: { value: "All Category", label: "All Category" },
  languageselect: { value: "All Languages", label: "All Languages" },
};

export default function AppSearchBar() {
  const [categorySelectedOption, setCategorySelectedOption] = useState(null);

  const [languageSelectedOption, setLanguageSelectedOption] = useState(null);

  const [genderState, setGenderState] = useState(allcheckboxes["gendersc"]);
  const [socialState, setSocialState] = useState(allcheckboxes["socials"]);
  const [verificationState, setVerificationState] = useState(
    allcheckboxes["Verificationstatus"]
  );

  const [trigger, setTrigger] = useState(0);

  const handleClickOnCheckbox = useCallback(
    (nameOfCheckbox, statusOfCheckbox, labelOfCheckbox) => {
      if (
        Array.isArray(allcheckboxes[labelOfCheckbox]) &&
        allcheckboxes[labelOfCheckbox] !== null
      ) {
        allcheckboxes[labelOfCheckbox].forEach((elem, index) => {
          if (elem.name == nameOfCheckbox) {
            allcheckboxes[labelOfCheckbox][index].checkstatus =
              statusOfCheckbox;
          }
        });
      }

      if (labelOfCheckbox == "gendersc") {
        setGenderState([...allcheckboxes[labelOfCheckbox]]);
      }

      if (labelOfCheckbox == "socials") {
        setSocialState([...allcheckboxes[labelOfCheckbox]]);
      }

      if (labelOfCheckbox == "Verificationstatus") {
        setVerificationState([...allcheckboxes[labelOfCheckbox]]);
      }
      //////////////////////////////////for checkboxes---end

      //////////////////////////////////react-Select
      if (labelOfCheckbox == "categeryselect") {
        allcheckboxes[labelOfCheckbox] = {
          value: "All Category",
          label: "All Category",
        };
        setCategorySelectedOption({
          value: "All Category",
          label: "All Category",
        });
      }

      if (labelOfCheckbox == "languageselect") {
        allcheckboxes[labelOfCheckbox] = {
          value: "All Languages",
          label: "All Languages",
        };
        setLanguageSelectedOption({
          value: "All Languages",
          label: "All Languages",
        });
      }
      //////////////////////////////////react-Select---end

      console.log(allcheckboxes);

      forceUpdateActiveFilters();
    },
    []
  );

  const forceUpdateActiveFilters = useCallback(() => {
    setTrigger((trigger) => trigger + 1);
  });

  const handleCategoryChanged = useCallback((value) => {
    setCategorySelectedOption(value);
    allcheckboxes["categeryselect"] = value;
    forceUpdateActiveFilters();
    console.log(value);
  }, []);

  return (
    <div className="bg-white">
      <div className="flex justify-center   " style={{ marginBottom: "10px" }}>
        <div
          className="relative mt-2   flex  items-center justify-start"
          style={{ width: "25%" }}
        >
          <Popover className="relative" style={{ display: "inline-block" }}>
            <Popover.Button
              type="button"
              className="rounded-md justify-self-start bg-white py-2.5 px-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Filter
              <FunnelIcon
                className="h-3.5 w-3.5 text-gray-500"
                style={{ display: "inline-block" }}
              />
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
              <Popover.Panel className="absolute left-1/2 z-10 mt-16 flex w-screen max-w-min lg:-translate-x-[14%] max-[390px]:-translate-x-[22%] -translate-x-[19%] px-4  ">
                <div
                  className="w-96 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5  overflow-auto  "
                  style={{ maxHeight: " 50vh" }}
                >
                  {/*    //////////////////////////////////////////////catagory-select/////////////////////////////////////////////////////////// */}
                  <legend className="text-base font-semibold leading-6 text-gray-900">
                    <InboxStackIcon
                      className="h-5 w-5 text-gray-500"
                      style={{ display: "inline-block" }}
                    />
                    Category
                  </legend>
                  <Select
                    className=" w-full   mt-2 text-gray-900 shadow-sm  border-0   "
                    options={category}
                    classNames="rounded-md"
                    value={categorySelectedOption}
                    placeholder="All Category"
                    maxMenuHeight={200}
                    onChange={(val) => {
                      console.log(val);
                      setCategorySelectedOption(val);
                      forceUpdateActiveFilters();
                    }}
                  />

                  {/* //////////////////////////////////////////////////////Language-select///////////////////////////////////////////////////// */}

                  <legend className="mt-4 text-base font-semibold leading-6 text-gray-900">
                    <LanguageIcon
                      className="h-5 w-5 text-gray-500"
                      style={{ display: "inline-block" }}
                    />
                    Language
                  </legend>
                  <Select
                    className=" w-full   mt-2 text-gray-900 shadow-sm  border-0   "
                    options={language}
                    classNames="rounded-md"
                    value={languageSelectedOption}
                    placeholder=" All Language"
                    maxMenuHeight={200}
                    onChange={(value) => {
                      setLanguageSelectedOption(value);
                      allcheckboxes["languageselect"] = value;
                      forceUpdateActiveFilters();
                    }}
                  />

                  {/* ///////////////////////////////////////start of checkboxes//////////////////////////////////////////////////////// */}
                  {/* /////////////////////////////////////////////////////////////gender/////////////////////////////////////////////////////////// */}
                  <fieldset className="mt-4">
                    <legend className="text-base font-semibold leading-6 text-gray-900">
                      <UserIcon
                        className="h-5 w-5 text-gray-500"
                        style={{ display: "inline-block" }}
                      />
                      Gender
                    </legend>
                    <div className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                      {genderState.map((person, personIdx) => (
                        <div
                          key={personIdx}
                          className="relative flex items-start py-4"
                        >
                          <div className="min-w-0 flex-1 text-sm leading-6">
                            <label
                              htmlFor={`person-${person.id}`}
                              className="select-none font-medium text-gray-900"
                            >
                              {person.name}
                            </label>
                          </div>
                          <div className="ml-3 flex h-6 items-center">
                            <input
                              id={`person-${person.id}`}
                              name={`person-${person.id}`}
                              checked={person.checkstatus}
                              type="checkbox"
                              key={person.name}
                              value={person.name}
                              onChange={(e) => {
                                handleClickOnCheckbox(
                                  e.target.value,
                                  e.target.checked,
                                  "gendersc"
                                );
                              }}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  {/*  ///////////////////////////////////////////////////Social-search//////////////////////////////////////////////////////////// */}

                  <fieldset className="mt-4">
                    <legend className="text-base font-semibold leading-6 text-gray-900">
                      <CursorArrowRippleIcon
                        className="h-6 w-6 text-gray-500"
                        style={{ display: "inline-block" }}
                      />
                      Social Search
                    </legend>
                    <div className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                      {socialState.map((socialsv, socialsIdx) => (
                        <div
                          key={socialsIdx}
                          className="relative flex items-start py-4"
                        >
                          <div className="min-w-0 flex-1 text-sm leading-6">
                            <label
                              htmlFor={`person-${socialsv.id}`}
                              className="select-none font-medium text-gray-900"
                            >
                              {socialsv.name}
                            </label>
                          </div>
                          <div className="ml-3 flex h-6 items-center">
                            <input
                              id={`person-${socialsv.id}`}
                              name={`person-${socialsv.id}`}
                              type="checkbox"
                              checked={socialsv.checkstatus}
                              value={socialsv.name}
                              onChange={(e) => {
                                handleClickOnCheckbox(
                                  e.target.value,
                                  e.target.checked,
                                  "socials"
                                );
                              }}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>

                  {/* ///////////////////////////////////////////////////////////Verification//////////////////////////////////////////////////////////////// */}

                  <fieldset className="mt-4">
                    <legend className="text-base font-semibold leading-6 text-gray-900">
                      <CheckBadgeIcon
                        className="h-5 w-5 text-blue-500"
                        style={{ display: "inline-block" }}
                      />
                      Verification
                    </legend>
                    <div className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                      {verificationState.map(
                        (Verificationstatus, VerificationstatusIdx) => (
                          <div
                            key={VerificationstatusIdx}
                            className="relative flex items-start py-4"
                          >
                            <div className="min-w-0 flex-1 text-sm leading-6">
                              <label
                                htmlFor={`person-${Verificationstatus.id}`}
                                className="select-none font-medium text-gray-900"
                              >
                                {Verificationstatus.name}
                              </label>
                            </div>
                            <div className="ml-3 flex h-6 items-center">
                              <input
                                id={`person-${Verificationstatus.id}`}
                                name={`person-${Verificationstatus.id}`}
                                type="checkbox"
                                value={Verificationstatus.name}
                                checked={Verificationstatus.checkstatus}
                                onChange={(e) => {
                                  handleClickOnCheckbox(
                                    e.target.value,
                                    e.target.checked,
                                    "Verificationstatus"
                                  );
                                }}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </fieldset>

                  {/* ////////////////////////////////////////////////////end of checkboxes/////////////////////////////////////////////////////////////////////////// */}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
        <CustomSearchBox
          onCategoryChanged={handleCategoryChanged}
          currentSelected={categorySelectedOption}
        />
      </div>
      <ActiveFiltersComponent
        allcheckboxestofilterdatatochild={allcheckboxes}
        stateofactivefilters={trigger}
        onclickingxbutton={handleClickOnCheckbox}
      />
    </div>
  );
}
