import { useEffect, useState } from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";
import useDebounce from "../hooks/useDebounce";
import Select from "react-select";
import { category } from "../../constants";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

const categorySelectStyles = {
  control: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "0.375rem",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
    height: "40px",
    fontSize: "0.875rem",

    lineHeight: "1.25rem",
  }),
  menuList: (styles) => ({
    ...styles,
    background: "white",
    borderRadius: "0.575rem",

    border: 1,
    fontSize: "0.775rem",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,

    zIndex: 10,
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,
  }),
};

export default function CustomSearchBox({
  currentSelected,
  onCategoryChanged,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const { refine } = useSearchBox();

  useEffect(() => {
    refine(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  return (
    <div
      className="relative mt-2 flex  items-center justify-center"
      style={{ width: "55%" }}
    >
      <Select
        className="block w-2/12   text-gray-900 shadow-sm  border-0 max-[1050px]:hidden "
        options={category}
        styles={categorySelectStyles}
        classNames="rounded-md"
        placeholder="All"
        maxMenuHeight={500}
        value={currentSelected}
        onChange={onCategoryChanged}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
      <input
        style={{
          height: "40px",
          borderLeft: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderRight: 0,
        }}
        type="search"
        name="search"
        id="search"
        placeholder="Search for mentors, creators, industry, sector..."
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
        className="block w-full  bg-white rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-2xl focus:scale-105 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <button className="inline-flex items-center   border-0 px-1 font-sans text-xs text-gray-400 hover:bg-transparent ">
          <MagnifyingGlassCircleIcon
            onClick={() => refine(searchQuery)}
            className="h-8 w-8 text-gray-300 hover:text-blue-500 hover:bg-transparent hover:scale-105 rounded-full hover:shadow"
          />
        </button>
      </div>
    </div>
  );
}
