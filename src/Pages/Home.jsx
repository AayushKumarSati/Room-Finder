import { useState } from "react";
import RoomCard from "../Components/RoomCard";

export default function Home() {
  const [search, setSearch] = useState("");

  // Dummy Room Data (backend से बाद में fetch करेंगे)
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
      image: "https://picsum.photos/400/200?random=1",
    },
    {
      id: 6,
      title: "PG for Girls",
      location: "Near Market Road",
      price: 6000,
      image: "https://picsum.photos/400/200?random=2",
    },
    {
      id: 7,
      title: "Single Room Flat",
      location: "Hostel Road",
      price: 4500,
      image: "https://picsum.photos/400/200?random=3",
    },
    {
      id: 8,
      title: "Shared Room",
      location: "City Center",
      price: 3500,
      image: "https://picsum.photos/400/200?random=4",
    },
  ];

  const filteredRooms = rooms.filter((room) =>
    room.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Find Your Perfect Room Near College
        </h1>
        <p className="mt-4 text-lg">
          Search, Compare and Book Affordable Rooms in just a click!
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search by location..."
            className="p-3 w-72 rounded-l-lg text-black focus:outline-none bg-white"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-yellow-400 text-black px-6 rounded-r-lg hover:bg-yellow-500">
            Search
          </button>
        </div>
      </section>

      {/* Room Listings */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Available Rooms</h2>
        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No rooms found for this location.</p>
        )}
      </section>
    </div>
  );
}
// return (
//   <div className="flex items-center justify-center h-screen bg-gray-300">
//     <form className="bg-white p-8 rounded-xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Signup</h2>
//       <PersonIcon />
//       <input
//         type="text"
//         placeholder="Name"
//         className="w-full border p-2 mb-3 rounded"
//         required
//       />
//       <EmailIcon />
//       <input
//         type="email"
//         placeholder="Email"
//         className="w-full border p-2 mb-3 rounded"
//         required
//       />
//       <LockIcon />
//       <input
//         type="password"
//         placeholder="Enter New Password"
//         className="w-full border p-2 mb-3 rounded"
//         required
//       />
//         <LockIcon />
//       <input
//         type="password"
//         placeholder="Confirm Your Password"
//         className="w-full border p-2 mb-3 rounded"
//         required
//       />
//       <button className="w-full bg-green-600 text-white p-2 rounded">
//         Signup
//       </button>
//       <div className="flex justify-center items-center">
//         {" "}
//         <p>Have an Account? </p>
//         <a href="/login" className="text-blue-700">
//           Login Here
//         </a>
//       </div>
//     </form>
//   </div>
// );
