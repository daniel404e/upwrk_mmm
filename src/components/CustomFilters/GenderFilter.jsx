import { UserIcon } from "@heroicons/react/24/solid";
import { REFINEMENT_ATTRIBUTES } from "../../common/constants";
import CheckboxFilter from "../BaseFilters/CheckboxFilter";

export default function GenderFilter() {
  return (
    <CheckboxFilter
      icon={
        <UserIcon
          className="h-5 w-5 text-gray-500"
          style={{ display: "inline-block" }}
        />
      }
      title="Gender"
      attribute={REFINEMENT_ATTRIBUTES.gender}
    />
  );
}
