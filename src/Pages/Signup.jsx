import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Signup
        </h2>

        {/* User name Field  */}
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
          <PersonIcon className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full outline-none bg-transparent"
            required
          />
        </div>

        {/* User Email Field  */}

        <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
          <EmailIcon className="text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full outline-none bg-transparent"
            required
          />
        </div>
        {/* User Password Field  */}

        <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
          <LockIcon className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Enter New Password"
            className="w-full outline-none bg-transparent"
            required
          />
        </div>

        {/* User Confirm Password Field*/}
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
          <LockIcon className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full outline-none bg-transparent"
            required
          />
        </div>
        <div className="flex space-x-6 mb-4">
          <div className="flex items-center space-x-2">
            <input type="radio" id="owner" name="role" value="owner" />
            <label htmlFor="owner">Owner</label>
          </div>

          <div className="flex items-center space-x-2">
            <input type="radio" id="students" name="role" value="students" />
            <label htmlFor="students">Student</label>
          </div>
        </div>

        {/* Signup Button Field*/}
        <button className="w-full bg-green-600 hover:bg-green-700 transition duration-300 text-white font-semibold py-2 rounded-lg shadow-md">
          Signup
        </button>

        {/* Login Link */}
        <div className="flex justify-center items-center mt-4 text-sm">
          <p className="text-gray-600">Already have an account?</p>
          <a
            href="/login"
            className="ml-1 text-blue-600 font-medium hover:underline"
          >
            Login Here
          </a>
        </div>
      </form>
    </div>
  );
}
