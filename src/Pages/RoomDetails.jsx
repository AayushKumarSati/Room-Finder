import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/rooms/${id}`)
      .then((res) => setRoom(res.data));
  }, [id]);

  if (!room) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-2xl">
      <img
        src={room.image}
        alt={room.title}
        className="rounded-xl w-full h-60 object-cover"
      />
      <h2 className="text-2xl font-bold mt-3">{room.title}</h2>
      <p className="text-gray-600">{room.location}</p>
      <p className="text-green-700 font-semibold">₹{room.price} / month</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Book Now
      </button>
    </div>
  );
}
