// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold text-orange-500">
        <img src="/logo.svg" alt="Chowly Logo" className="w-8 h-8" />
        Chowly
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 font-medium text-gray-700">
        {[
          { name: "Home", path: "/" },
          { name: "Restaurant", path: "/restaurants" },
          { name: "Menu", path: "/menu" },
          { name: "Vendor", path: "/vendors" },
          { name: "Hot Orders", path: "/orders" },
          { name: "Track Order", path: "/track" },
        ].map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="hover:text-orange-500 transition">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
        Signup/Login
      </Button>
    </nav>
  );
}
