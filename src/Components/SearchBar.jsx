import React from "react";

export default function SearchBar({ onSearch }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Search by location..."
        className="border p-2 flex-1 rounded"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
}
