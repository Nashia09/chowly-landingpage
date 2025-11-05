// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-20 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <img src="/logo.svg" alt="Chowly Logo" className="w-7 h-7" />
          Chowly
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          {["Home", "Restaurants", "Menu", "Vendors", "Orders", "Track Order"].map(
            (link, index) => (
              <li key={index}>
                <Link
                  to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-orange-400 transition"
                >
                  {link}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Social Media */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange-400 transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Chowly. All Rights Reserved.
      </p>
    </footer>
  );
}
