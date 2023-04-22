import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { REFINEMENT_ATTRIBUTES } from "../../common/constants";
import CheckboxFilter from "../BaseFilters/CheckboxFilter";
import { transformVerificationItems } from "../../../utils/refinements";

export default function VerificationFilter() {
  return (
    <CheckboxFilter
      icon={
        <CheckBadgeIcon
          className="h-5 w-5 text-blue-500"
          style={{ display: "inline-block" }}
        />
      }
      title="Verification"
      attribute={REFINEMENT_ATTRIBUTES.verification}
      transformItems={transformVerificationItems}
    />
  );
}
