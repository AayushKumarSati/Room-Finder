import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link className=" text-2xl font-bold tracking-wide">RoomFinder</Link>

        {/* Links */}
        <div className=" flex items-center  space-x-6">
          <Link
            to="/"
            className="hover:text-gray-200 hover:border-2  p-1.5 rounded-lg"
          >
            Home
            <HomeIcon className="mx-1" />
          </Link>
          <Link
            to="/login"
            className="hover:text-gray-200 hover:border-2  p-1.5 rounded-lg"
          >
            Login
            <LoginIcon className="mx-1" />
          </Link>
          <Link
            to="/signup"
            className="hover:text-gray-200 hover:border-2  p-1.5 rounded-lg"
          >
            Signup
          </Link>
          <Link
            to="/owner"
            className="bg-white text-blue-600 px-3 py-1 rounded-lg shadow hover:bg-gray-100"
          >
            Owner Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
