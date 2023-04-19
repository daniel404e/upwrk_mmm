export function transformItemsToRefinementLabels(items) {
  const filters = items.map((item) => item.refinements).flat();
  return filters;
}
