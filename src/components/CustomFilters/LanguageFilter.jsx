import { LanguageIcon } from "@heroicons/react/24/solid";
import { useRefinementList } from "react-instantsearch-hooks-web";
import { REFINEMENT_ATTRIBUTES } from "../../common/constants";
import SelectionFilter from "../BaseFilters/SelectionFilter";

export default function LanguageFilter() {
  const { items: languageRefinements, refine } = useRefinementList({
    attribute: REFINEMENT_ATTRIBUTES.language,
  });
  return (
    <SelectionFilter
      icon={
        <LanguageIcon
          className="h-5 w-5 text-gray-500"
          style={{ display: "inline-block" }}
        />
      }
      title="Language"
      options={languageRefinements}
      refine={refine}
    />
  );
}
