import { useInfiniteHits } from "react-instantsearch-hooks-web";
import { transformItemsToUser } from "../../utils/hits";
import LoadMore from "./LoadMore";

export default function Result() {
  const { hits } = useInfiniteHits({ transformItems: transformItemsToUser });
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Explore and Connect</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ">
          {hits.map((hit) => (
            <div key={hit.id}>
              <div className="relative ">
                <div className="relative h-72 w-full overflow-hidden rounded-lg   ">
                  <img
                    src={hit.imageSrc}
                    alt={hit.imageAlt}
                    className="h-full w-full object-cover object-center  "
                  />
                </div>
                <div className="relative mt-4" style={{ maxHeight: "50px" }}>
                  <h3 className="text-md font-medium text-gray-900">
                    {hit.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{hit.color}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-70 hover:opacity-40 transition-opacity duration-300 "
                  />
                  <p className="relative text-lg font-semibold text-white ">
                    {hit.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={hit.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200 hover:drop-shadow-md transition-shadow duration-500"
                >
                  View profile<span className="sr-only">{hit.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-5">
          <LoadMore />
        </div>
      </div>
    </div>
  );
}
