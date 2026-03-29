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

  // if (loading) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-48">
  //       <p className="text-lg text-gray-600 font-medium">
  //         Loading countries...
  //       </p>
  //     </div>
  //   );
  // }
// Replace your loading div with this:
if (loading) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 p-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white dark:bg-gray-400 dark:border-gray-400">
          {/* Flag placeholder */}
          <div className="h-40 bg-gray-200 animate-pulse" />
          
          {/* Text lines */}
          <div className="p-5 flex flex-col gap-3">
            <div className="h-4 bg-gray-200  rounded animate-pulse w-2/3" />
            <div className="h-3 bg-gray-200  rounded animate-pulse w-full" />
            <div className="h-3 bg-gray-200  rounded animate-pulse w-4/5" />
            <div className="h-3 bg-gray-200  rounded animate-pulse w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 p-2">
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
