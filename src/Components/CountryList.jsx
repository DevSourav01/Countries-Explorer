import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
export default function CountryList({ search = "", region = "" }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,currencies,population",
      );
      const data = await res.json();
      
      setCountries(data);
      setLoading(false);
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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-48">
        <p className="text-lg text-gray-600 font-medium">
          Loading countries...
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {filtered.length === 0 ? (
        <p>Please Enter a Valid Country</p>
      ) : (
        filtered.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))
      )}
    </div>
  );
}
