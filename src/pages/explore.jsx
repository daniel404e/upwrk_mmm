import AppSearchBar from "../components/AppSearchBar";
import Result from "../components/Result";

export default function ExplorePage() {
  return (
    <div className="bg-white">
      <div
        className="container mx-auto sm:px-6 lg:px-8"
        style={{ marginTop: "5%" }}
      >
        <AppSearchBar />
        <Result />
      </div>
    </div>
  );
}
