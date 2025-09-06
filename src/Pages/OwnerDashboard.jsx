import React from "react";
import RoomIcon from "@mui/icons-material/MeetingRoom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ImageIcon from "@mui/icons-material/Image";

export default function OwnerDashboard() {
  return (
    <div className="pt-16 p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-600">
        Add New Room
      </h2>

      <form className="space-y-4 bg-white shadow-lg rounded-lg p-6 sm:p-8">
        {/* Room Title */}
        <div className="flex items-center border rounded-lg p-2">
          <RoomIcon className="text-gray-400 mr-2" />
          <input
            type="text"
            name="title"
            placeholder="Room Title"
            className="w-full focus:outline-none"
            required
          />
        </div>

        {/* Location */}
        <div className="flex items-center border rounded-lg p-2">
          <LocationOnIcon className="text-gray-400 mr-2" />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full focus:outline-none"
            required
          />
        </div>

        {/* Price */}
        <div className="flex items-center border rounded-lg p-2">
          <AttachMoneyIcon className="text-gray-400 mr-2" />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full focus:outline-none"
            required
          />
        </div>

        {/* Image URL */}
        <div className="flex items-center border rounded-lg p-2">
          <ImageIcon className="text-gray-400 mr-2" />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            className="w-full focus:outline-none"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-md"
        >
          Save
        </button>
      </form>
    </div>
  );
}
