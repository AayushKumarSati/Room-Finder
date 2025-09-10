import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "STUDENT",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    // Password match validation
    if (form.password !== form.confirm_password) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8085/api/auth/signup",
        form
      );
      alert(response.data); // backend ka message aayega
      //clear the form after the successfully signup
      setForm({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        role: "STUDENT",
      });
    } catch (error) {
      console.error(error);
      alert(error.response?.data || "Signup failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Signup
        </h2>

        {/* User name Field  */}
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
          <PersonIcon className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={form.name}
            className="w-full outline-none bg-transparent"
            onChange={handleChange}
            required
          />
        </div>

        {/* User Email Field  */}

        <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
          <EmailIcon className="text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={form.email}
            className="w-full outline-none bg-transparent"
            onChange={handleChange}
            required
          />
        </div>
        {/* User Password Field  */}

        <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
          <LockIcon className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Enter New Password"
            name="password"
            value={form.password}
            className="w-full outline-none bg-transparent"
            onChange={handleChange}
            required
          />
        </div>

        {/* User Confirm Password Field*/}
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
          <LockIcon className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            value={form.confirm_password}
            className="w-full outline-none bg-transparent"
            onChange={handleChange}
            required
          />
        </div>
        {/* Role Selection*/}
        <div className="flex space-x-6 mb-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="owner"
              name="role"
              value="OWNER"
              checked={form.role === "OWNER"}
              onChange={handleChange}
            />
            <label htmlFor="owner">Owner</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="students"
              name="role"
              value="STUDENT"
              checked={form.role === "STUDENT"}
              onChange={handleChange}
            />
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
