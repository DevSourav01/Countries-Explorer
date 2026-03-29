// App.jsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import FilterMenu from "./Components/FilterMenu";
import CountryList from "./Components/CountryList";
import CountryDetail from "./Components/Pages/CountryDetails";

export default function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);

  // Reuse the same fetch logic you already have in CountryList
  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,currencies,population,area,cca2,cca3",
      );
      const data = await res.json();
      setCountries(data);
    }
    fetchCountries();
  }, []);

  const filtered = countries.filter((country) => {
    const name = country.name?.common?.toLowerCase() || "";
    const matchSearch = name.includes(search.toLowerCase());
    const matchRegion =
      region === "" || (country.region && country.region === region);
    return matchSearch && matchRegion;
  });

  return (
    <BrowserRouter>
      <Header />
      <div className="flex flex-wrap justify-between gap-4 p-4">
        <SearchBar value={search} onChange={setSearch} />
        <FilterMenu value={region} onChange={setRegion} />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <CountryList search={search} region={region} countries={filtered} />
          }
        />
        <Route
          path="/country/:name"
          element={<CountryDetail countries={countries} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
