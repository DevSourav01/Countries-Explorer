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
    <div className="min-h-100 flex flex-col items-center justify-center gap-6 p-8">
      <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-700 mb-2">Loading Countries</p>
      </div>
    
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
