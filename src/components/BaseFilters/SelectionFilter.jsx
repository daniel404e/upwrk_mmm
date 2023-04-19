import Select from "react-select";

export default function SelectionFilter({ icon, options, refine, title }) {
  return (
    <>
      <legend className="text-base font-semibold leading-6 text-gray-900">
        {icon}
        {title}
      </legend>
      <Select
        className=" w-full   mt-2 text-gray-900 shadow-sm  border-0   "
        options={options}
        classNames="rounded-md"
        placeholder="All Category"
        maxMenuHeight={200}
        onChange={(val) => {
          console.log(val);
          refine(val);
        }}
      />
    </>
  );
}
