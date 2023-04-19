
import ActiveFilters from "./BaseFilters/ActiveFilters";
import CustomFilters from "./CustomFilters";
import CustomSearchBox from "./CustomSearchBox";

export default function AppSearchBar() {
  return (
    <div className="bg-white">
      <div className="flex justify-center" style={{ marginBottom: "10px" }}>
        <CustomFilters />
        <CustomSearchBox />
      </div>
      <ActiveFilters />
    </div>
  );
}
