import { CursorArrowRippleIcon } from "@heroicons/react/24/solid";
import { REFINEMENT_ATTRIBUTES } from "../../common/constants";
import CheckboxFilter from "../BaseFilters/CheckboxFilter";
import { transformSocialItems } from "../../../utils/refinements";

export default function SocialFilter() {
  return (
    <CheckboxFilter
      icon={
        <CursorArrowRippleIcon
          className="h-6 w-6 text-gray-500"
          style={{ display: "inline-block" }}
        />
      }
      title="Social Search"
      attribute={REFINEMENT_ATTRIBUTES.social}
      transformItems={transformSocialItems}
    />
  );
}
