import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bg-blue-600 text-white shadow-md top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link className="text-2xl font-bold tracking-wide">RoomFinder</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="hover:text-gray-200 hover:border-2 p-1.5 rounded-lg flex items-center"
          >
            <HomeIcon className="mr-1" /> Home
          </Link>

          <Link
            to="/signup"
            className="hover:text-gray-200 hover:border-2 p-1.5 rounded-lg"
          >
            Signup
          </Link>

          <Link
            to="/login"
            className="hover:text-gray-200 hover:border-2 p-1.5 rounded-lg flex items-center"
          >
            Login <LoginIcon className="ml-1" />
          </Link>

          <Link
            to="/owner"
            className="hover:text-gray-200 hover:border-2 p-1.5 rounded-lg"
          >
            Owner Dashboard
          </Link>
        </div>

        {/* set Mobile Menu Button(According to Mobile screen) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 w-full px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block hover:text-gray-200 hover:border-2 p-2 rounded-lg flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <HomeIcon className="mr-1" /> Home
          </Link>

          <Link
            to="/signup"
            className="block hover:text-gray-200 hover:border-2 p-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Signup
          </Link>

          <Link
            to="/login"
            className="block hover:text-gray-200 hover:border-2 p-2 rounded-lg flex items-center"
            onClick={() => setIsOpen(false)}
          >
            Login <LoginIcon className="ml-1" />
          </Link>

          <Link
            to="/owner"
            className="block hover:text-gray-200 hover:border-2 p-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Owner Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
