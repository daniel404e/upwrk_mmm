import { usePagination } from "react-instantsearch-hooks-web";

export default function LoadMore() {
  const { canRefine, isLastPage, currentRefinement, refine } = usePagination();
  if (!canRefine || isLastPage) return null;

  return (
    <button
      onClick={() => refine(currentRefinement + 1)}
      className="relative flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded transition-shadow duration-500"
    >
      Load More
    </button>
  );
}
