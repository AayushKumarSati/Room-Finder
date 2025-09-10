import { useState } from "react";
import RoomCard from "../Components/RoomCard";

export default function Home() {
  const [search, setSearch] = useState("");

  // Dummy Room Data
  const rooms = [
    {
      id: 1,
      title: "Boys Hostel Near XYZ College",
      location: "ABC Colony",
      price: 5000,
      image: "https://picsum.photos/400/200?random=1",
    },
    {
      id: 2,
      title: "PG for Girls",
      location: "Near Market Road",
      price: 6000,
      image: "https://picsum.photos/400/200?random=2",
    },
    {
      id: 3,
      title: "Single Room Flat",
      location: "Hostel Road",
      price: 4500,
      image: "https://picsum.photos/400/200?random=3",
    },
    {
      id: 4,
      title: "Shared Room",
      location: "City Center",
      price: 3500,
      image: "https://picsum.photos/400/200?random=4",
    },
    {
      id: 5,
      title: "Boys Hostel Near XYZ College",
      location: "ABC Colony",
      price: 5000,
      image: "https://picsum.photos/400/200?random=5",
    },
    {
      id: 6,
      title: "PG for Girls",
      location: "Near Market Road",
      price: 6000,
      image: "https://picsum.photos/400/200?random=6",
    },
    {
      id: 7,
      title: "Single Room Flat",
      location: "Hostel Road",
      price: 4500,
      image: "https://picsum.photos/400/200?random=7",
    },
    {
      id: 8,
      title: "Shared Room",
      location: "City Center",
      price: 3500,
      image: "https://picsum.photos/400/200?random=8",
    },
  ];

  const filteredRooms = rooms.filter((room) =>
    room.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 md:py-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Find Your Perfect Room Near College
        </h1>ko
        <p className="mt-4 text-md md:text-lg max-w-xl mx-auto">
          Search, Compare and Book Affordable Rooms in just a click!
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0">
          <input
            type="text"
            placeholder="Search by location..."
            className="p-3 w-full sm:w-80 rounded-l-lg text-black focus:outline-none bg-white"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-r-lg hover:bg-yellow-500 w-full sm:w-auto">
            Search
          </button>
        </div>
      </section>

      {/* Room Listings */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Available Rooms
        </h2>
        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            No rooms found for this location.
          </p>
        )}
      </section>
    </div>
  );
}
