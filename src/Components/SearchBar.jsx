export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex-1 max-w-xs">
      <input
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}