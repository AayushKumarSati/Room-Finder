import { useState } from "react";
import axios from "axios";

export default function OwnerDashboard() {
  const [room, setRoom] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/rooms", room);
    alert("Room Added!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Room</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Room Title"
          className="w-full border p-2 rounded"
          onChange={(e) => setRoom({ ...room, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border p-2 rounded"
          onChange={(e) => setRoom({ ...room, location: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded"
          onChange={(e) => setRoom({ ...room, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          onChange={(e) => setRoom({ ...room, image: e.target.value })}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
}
