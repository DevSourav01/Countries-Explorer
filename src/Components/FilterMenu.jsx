export default function FilterMenu({ value, onChange }) {
  return (
    <div className="w-48">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px- py-2 border rounded-lg shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}