import { useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import FilterMenu from "./Components/FilterMenu";
import CountryList from "./Components/CountryList";

export default function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-between gap-4 p-4">
        <SearchBar value={search} onChange={setSearch} />
        <FilterMenu value={region} onChange={setRegion} />
      </div>
      <CountryList search={search} region={region} />
    </>
  );
}