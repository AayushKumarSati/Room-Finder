import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300">
      <img
        src={room.image}
        alt={room.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{room.title}</h2>
        <p className="text-gray-600">{room.location}</p>
        <p className="text-green-700 font-bold mt-1">₹{room.price} / month</p>
        <Link
          to={`/room/${room.id}`}
          className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
