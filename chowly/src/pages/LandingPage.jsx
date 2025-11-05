import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 shadow-sm sticky top-0 bg-white z-50">
          <div className="flex items-center gap-2 text-2xl font-bold text-orange-500">
            <img src="/logo.svg" alt="Chowly Logo" className="w-8 h-8" /> Chowly
          </div>
          <ul className="hidden md:flex gap-6 font-medium">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/restaurants" className="hover:text-orange-500">Restaurant</Link></li>
            <li><Link to="/menu" className="hover:text-orange-500">Menu</Link></li>
            <li><Link to="/vendors" className="hover:text-orange-500">Vendor</Link></li>
            <li><Link to="/orders" className="hover:text-orange-500">Hot Orders</Link></li>
            <li><Link to="/track" className="hover:text-orange-500">Track Order</Link></li>
          </ul>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">Signup/Login</Button>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-orange-50">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold leading-snug mb-4">
              Feast Your Senses,<br /> <span className="text-orange-500">Fast and Fresh</span>
            </h1>
            <p className="text-gray-600 mb-6">Your favorite meal is just an order away.</p>
            <div className="flex gap-2">
              <Input placeholder="Search your favorite meal/vendor" className="flex-1 rounded-full" />
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-full">Search</Button>
            </div>
          </div>
          <img src="/hero.png" alt="Hero Image" className="w-full md:w-1/2 mt-8 md:mt-0 rounded-2xl shadow-md" />
        </section>

        {/* Deals Section */}
        <section className="px-8 md:px-20 py-16">
          <h2 className="text-2xl font-semibold mb-8">Up to -40% 🎉 Chowly exclusive deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Shawarma", "Local Dishes", "Burger"].map((item, i) => (
              <Card key={i} className="overflow-hidden shadow hover:shadow-lg transition">
                <img src={`/deal-${i + 1}.jpg`} alt={item} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{item}</h3>
                  <p className="text-sm text-gray-500">Up to 40% off</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Menu */}
        <section className="bg-gray-50 px-8 md:px-20 py-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Popular Menu</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Amala", "Jollof Rice", "Pasta", "Pizza", "Breakfast"].map((item, i) => (
              <Card key={i} className="overflow-hidden text-center">
                <img src={`/menu-${i + 1}.jpg`} alt={item} className="w-full h-32 object-cover" />
                <CardContent className="p-2">
                  <p className="font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Restaurants Section */}
        <section className="px-8 md:px-20 py-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Popular Restaurants</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Iyawo", "Chicken Republic", "Nexus", "Nigerian Breeze", "Deli-Luna"].map((item, i) => (
              <Card key={i} className="overflow-hidden">
                <img src={`/restaurant-${i + 1}.jpg`} alt={item} className="w-full h-32 object-cover" />
                <CardContent className="p-2">
                  <p className="font-medium text-center">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partner Section */}
        <section className="flex flex-col md:flex-row gap-6 px-8 md:px-20 py-16 bg-orange-50 items-center justify-between">
          <div className="bg-white shadow rounded-2xl p-6 flex-1">
            <h3 className="font-semibold text-xl mb-2">Partner with us</h3>
            <p className="text-gray-600 mb-4">Sign up as a business to grow your reach.</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">Get Started</Button>
          </div>
          <div className="bg-white shadow rounded-2xl p-6 flex-1">
            <h3 className="font-semibold text-xl mb-2">Ride with us</h3>
            <p className="text-gray-600 mb-4">Become a Chowly Rider and earn more.</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">Get Started</Button>
          </div>
        </section>

        {/* About Section */}
        <section className="px-8 md:px-20 py-16 text-center bg-gray-50">
          <h2 className="text-2xl font-semibold mb-6">Know more about us!</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Chowly simplifies the food ordering process. Browse through our diverse menu,
            select your favorite dishes and proceed to checkout. Your selected meal will be
            at your door in great serving time!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{label: "Registered Riders", val: "546+"}, {label: "Orders Delivered", val: "789,900+"}, {label: "Restaurants Partnered", val: "690+"}, {label: "Food Items", val: "17,457+"}].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-orange-500">{stat.val}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-200 px-8 md:px-20 py-8 text-center">
          <p>Chowly Copyright 2025. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
