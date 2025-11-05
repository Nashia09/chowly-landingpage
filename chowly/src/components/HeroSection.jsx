// src/components/HeroSection.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-orange-50 overflow-hidden">
      {/* Left Side: Text and Search */}
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Feast Your Senses, <br />
          <span className="text-orange-500">Fast and Fresh</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Your favorite meal is just an order away.
        </p>

        {/* Search Input */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Search your favorite meal or vendor"
            className="flex-1 rounded-full"
          />
          <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-6">
            Search
          </Button>
        </div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center">
        <img
          src="/hero.png"
          alt="Woman holding food box"
          className="w-full max-w-md rounded-2xl shadow-md object-cover"
        />
      </div>
    </section>
  );
}
