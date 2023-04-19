import { LanguageIcon } from "@heroicons/react/24/solid";
import { REFINEMENT_ATTRIBUTES } from "../../common/constants";
import SelectionFilter from "../BaseFilters/SelectionFilter";

export default function LanguageFilter() {

  return (
    <SelectionFilter
      icon={
        <LanguageIcon
          className="h-5 w-5 text-gray-500"
          style={{ display: "inline-block" }}
        />
      }
      title="Language"
      attribute={REFINEMENT_ATTRIBUTES.language}
    />
  );
}
