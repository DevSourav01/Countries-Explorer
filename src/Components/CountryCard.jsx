// CountryCard.jsx
import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  if (!country) return null;

  const name = country.name?.common;
  const capital = country.capital?.[0] || "–";
  const region = country.region || "–";
  const flag = country.flags?.svg;

  // "Cook Islands" → "Cook-Islands"
  const slug = name.replace(/\s+/g, "-");

  return (
    <Link
      to={`/country/${slug}`}
      className="border rounded-xl p-5 hover:cursor-pointer shadow-xl transition-shadow bg-white flex flex-col items-center text-center group"
    >
      {flag && (
        <img
          src={flag}
          alt={name}
          width="120"
          className="mx-auto mb-4 rounded-lg shadow-sm"
        />
      )}
      <h1 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
        {name}
      </h1>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium text-gray-700">Capital:</span> {capital}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-700">Region:</span> {region}
      </p>
    </Link>
  );
}