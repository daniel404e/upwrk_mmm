import { useRefinementList } from "react-instantsearch-hooks-web";

export default function CheckboxFilter({ icon, title, attribute }) {
  const { items, refine } = useRefinementList({
    attribute,
  });

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
            className="relative flex items-start py-4"
          >
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label
                htmlFor={`person-${refinement.value}`}
                className="select-none font-medium text-gray-900"
              >
                {refinement.label}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={`person-${refinement.value}`}
                name={`person-${refinement.value}`}
                type="checkbox"
                checked={refinement.isRefined}
                key={refinement.value}
                value={refinement.value}
                onChange={(e) => {
                  refine(refinement.value);
                }}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
