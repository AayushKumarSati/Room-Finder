import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Foot() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white">RoomFinder</h2>
          <p className="mt-3 text-sm text-gray-400">
            Book rooms easily with trusted owners near your college.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/" className="hover:text-green-400">
                Home
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-green-400">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-green-400">
                Signup
              </a>
            </li>
            <li>
              <a href="/owner" className="hover:text-green-400">
                Owner Dashboard
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/faq" className="hover:text-green-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-green-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-green-400">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a
              href="https://www.facebook.com/"
              className="hover:text-green-400"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-kumar-sati-860073183/"
              className="hover:text-green-400"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://x.com/aayush_sati002"
              className="hover:text-green-400"
              target="_blank"
            >
              <XIcon />
            </a>
            <a
              href="https://www.youtube.com/@AayushSati"
              className="hover:text-green-400"
              target="_blank"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} RoomFinder. All Rights Reserved.
      </div>
    </footer>
  );
}
