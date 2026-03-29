// pages/CountryDetail.jsx – Modern Style
import { useParams, useNavigate } from "react-router-dom";

export default function CountryDetail({ countries }) {
  const { name: nameParam } = useParams();
  const navigate = useNavigate();

  const decodedName = nameParam.replace(/-/g, " ");

  const country = countries?.find(
    (c) => c.name?.common === decodedName
  );

  if (!country) {
    return (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
        <button
          onClick={() => navigate("/")}
          className="mb-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
        >
          ← Back
        </button>
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-800 mb-4">Not Found</h1>
          <p className="text-xl text-gray-600">Country not found</p>
        </div>
      </div>
    );
  }

  const name = country.name?.common;
  const capital = country.capital?.[0] || "–";
  const region = country.region || "–";
  const flag = country.flags?.svg;
  const population = country.population?.toLocaleString() || "–";

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
      >
        ← Back
      </button>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 p-10">
          {/* Flag */}
          {flag && (
            <div className="flex-shrink-0">
              <img
                src={flag}
                alt={name}
                className="w-40 h-24 lg:w-52 lg:h-32 object-cover rounded-2xl shadow-xl ring-4 ring-white/50"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                {name}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                <span className="block text-xs font-bold text-indigo-600 uppercase tracking-wider">Capital</span>
                <p className="text-2xl font-bold text-gray-900">{capital}</p>
              </div>
              
              <div className="space-y-3 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
                <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider">Region</span>
                <p className="text-xl font-bold text-gray-900">{region}</p>
              </div>
              
              <div className="space-y-3 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <span className="block text-xs font-bold text-blue-600 uppercase tracking-wider">Population</span>
                <p className="text-xl font-bold text-gray-900">{population}</p>
              </div>
              
              <div className="space-y-3 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
                <span className="block text-xs font-bold text-orange-600 uppercase tracking-wider">Area</span>
                <p className="text-xl font-bold text-gray-900">
                  {country.area?.toLocaleString()} km²
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}