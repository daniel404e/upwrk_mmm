import { InboxStackIcon } from "@heroicons/react/24/solid";
import { useRefinementList } from "react-instantsearch-hooks-web";
import { REFINEMENT_ATTRIBUTES } from "../../common/constants";
import SelectionFilter from "../BaseFilters/SelectionFilter";

export default function CategoryFilter() {
  const { items: categoryRefinements, refine } = useRefinementList({
    attribute: REFINEMENT_ATTRIBUTES.category,
  });

  return (
    <SelectionFilter
      icon={
        <InboxStackIcon
          className="h-5 w-5 text-gray-500"
          style={{ display: "inline-block" }}
        />
      }
      title="Category"
      options={categoryRefinements}
      refine={refine}
    />
  );
}
