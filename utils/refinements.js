/**
 * @typedef {ReturnType<NonNullable<import("react-instantsearch-hooks-web").UseRefinementListProps['transformItems']>>} ItemList
 */

import {
  SOCIAL_MEDIA_LIST,
  STATIC_CATEGORIES,
  STATIC_LANGUAGES,
} from "../src/common/constants";

/**
 * @param {ItemList} items
 */
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
 * @template T
 * @param {Array<T>} staticItems
 * @param {ItemList} items
 * @param {T extends String ? never :  keyof T } valueKey
 */
function setRefinementItems(staticItems, items, valueKey = null) {
  return staticItems.map((_value) => {
    const value = typeof _value === "string" ? _value : _value[valueKey];
    const item = items.find((item) => item.value === value);
    /**
     * @type {NonNullable<typeof item>}
     */
    const newItem = {
      isRefined: false,
      count: 0,
      label: value,
      highlighted: value,
      value,
    };
    if (item) {
      return item;
    }
    return newItem;
  });
}

/**
 * @param {ItemList} items
 */
export function transformSocialItems(items) {
  return setRefinementItems(SOCIAL_MEDIA_LIST, items);
}

/**
 * @param {ItemList} items
 */
export function transformLanguageItems(items) {
  return setRefinementItems(STATIC_LANGUAGES, items, "name");
}

/**
 * @param {ItemList} items
 */
export function transformCategoryItems(items) {
  return setRefinementItems(STATIC_CATEGORIES, items, "name");
}
