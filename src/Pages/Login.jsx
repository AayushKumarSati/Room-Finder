import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
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

        <div>
          <a
            href="/signup"
            className="ml-1 text-blue-600 font-medium hover:underline"
          >
            {" "}
            Forget Password
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          {/* Login Button */}
          <button className="flex-1 bg-green-600 hover:bg-green-700 transition duration-300 text-white font-semibold py-2 rounded-lg shadow-md">
            Login
          </button>

          {/* Reset Button */}
          <button className="flex-1 bg-gray-500 hover:bg-gray-600 transition duration-300 text-white font-semibold py-2 rounded-lg shadow-md">
            Reset
          </button>
        </div>
        <div className="flex justify-center items-center mt-4 text-sm">
          <p className="text-gray-600">Dont't have an account?</p>
          <a
            href="/signup"
            className="ml-1 text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
