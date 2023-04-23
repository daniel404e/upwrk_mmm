import { useRef } from "react";
import { useRefinementList } from "react-instantsearch-hooks-web";

/**
 * @typedef {import("react-instantsearch-hooks-web").UseRefinementListProps} UseRefinementListProps
 * @param {{
 *  icon: JSX.Element
 *  title: string
 *  attribute: UseRefinementListProps['attribute']
 *  transformItems: UseRefinementListProps['transformItems']
 * }} props
 * @returns
 */
export default function CheckboxFilter({
  icon,
  title,
  attribute,
  transformItems = undefined,
}) {
  const { items, refine } = useRefinementList({
    attribute,
    transformItems,
  });
  const inputRef = useRef(null);

  const triggerInputChange = () => {
    const event = new Event("input", { bubbles: true });
    inputRef.current.dispatchEvent(event);
  };

  const onClick = (refinement) => {
    refine(refinement.value);
    triggerInputChange();
  };

  return (
    <fieldset className="mt-4">
      <legend className="text-base font-semibold leading-6 text-gray-900">
        {icon}
        {title}
      </legend>
      <div className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
        {items.map((refinement) => (
          <div
            key={refinement.value}
            className="relative flex items-start py-4 cursor-pointer"
            onClick={() => onClick(refinement)}
          >
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label className="select-none font-medium text-gray-900 capitalize cursor-pointer">
                {refinement.label}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                ref={inputRef}
                id={`person-${refinement.value}`}
                name={`person-${refinement.value}`}
                type="checkbox"
                checked={refinement.isRefined}
                key={refinement.value}
                value={refinement.value}
                onChange={(e) => void 0}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
