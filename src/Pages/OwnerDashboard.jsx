import { useState } from "react";

export default function OwnerDashboard() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Room</h2>
      <form className="space-y-3">
        <input
          type="text"
          placeholder="Room Title"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
}
