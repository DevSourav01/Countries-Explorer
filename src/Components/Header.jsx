export default function Header() {
  return (
    <header className="bg-blue-700 text-white px-4 py-3 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">Countries Explorer</h1>
        <button className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded text-sm font-medium transition-colors">
          Dark Mode
        </button>
      </div>
    </header>
  );
}