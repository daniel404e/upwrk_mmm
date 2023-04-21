import { useEffect, useState } from "react";
import {
  useClearRefinements,
  useRefinementList,
} from "react-instantsearch-hooks-web";
import Select from "react-select";

export default function SelectionFilter({ icon, title, attribute }) {
  const { items, refine } = useRefinementList({
    attribute,
  });
  const { refine: clearRefinements } = useClearRefinements({
    includedAttributes: [attribute],
  });
  const [internalRefinement, setInternalRefinement] = useState(null);

  useEffect(() => {
    const selected = items.find((select) => select.isRefined);
    setInternalRefinement(selected || null);
  }, [items]);

  return (
    <>
      <legend className="text-base font-semibold leading-6 text-gray-900">
        {icon}
        {title}
      </legend>
      <Select
        className="w-full mt-2 text-gray-900 shadow-sm  border-0"
        options={items}
        value={internalRefinement}
        classNames="rounded-md"
        placeholder="All Category"
        maxMenuHeight={200}
        onChange={(item) => {
          setInternalRefinement(item);
          clearRefinements();
          refine(item.value);
        }}
      />
    </>
  );
}
