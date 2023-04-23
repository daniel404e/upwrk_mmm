import { SOCIAL_MEDIA_LIST } from "../src/common/constants";

export function transformItemsToRefinementLabels(items) {
  const filters = items
    .map((item) => transformVerificationItems(item.refinements))
    .flat();
  return filters;
}

export function transformVerificationItems(items) {
  const boolStrings = ["true", "false"];
  return items.map((item) => {
    if (boolStrings.includes(item.label)) {
      if (item.label === "true") {
        item.label = "Verified";
      } else {
        item.label = "Not Verified";
      }
    }
    return item;
  });
}

/**
 * Add more options to fixed
 */
export function transformSocialItems(items) {
  return SOCIAL_MEDIA_LIST.map((value) => {
    const item = items.find((item) => item.value === value);
    if (item) {
      return item;
    }
    return {
      isRefined: false,
      count: 0,
      label: value,
      highlighted: value,
      value,
    };
  });
}
