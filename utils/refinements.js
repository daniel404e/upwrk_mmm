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
