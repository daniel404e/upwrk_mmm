import { InboxStackIcon } from "@heroicons/react/24/solid";
import { REFINEMENT_ATTRIBUTES } from "../../common/constants";
import SelectionFilter from "../BaseFilters/SelectionFilter";
import { transformCategoryItems } from "../../../utils/refinements";

export default function CategoryFilter() {
  return (
    <SelectionFilter
      icon={
        <InboxStackIcon
          className="h-5 w-5 text-gray-500"
          style={{ display: "inline-block" }}
        />
      }
      title="Category"
      attribute={REFINEMENT_ATTRIBUTES.category}
      transformItems={transformCategoryItems}
    />
  );
}
