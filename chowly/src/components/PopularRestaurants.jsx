// src/components/PopularRestaurants.jsx
import { Card, CardContent } from "./ui/card";

export default function PopularRestaurants() {
  const restaurants = [
    { name: "Iyawo Kitchen", img: "/restaurants/iyawo.jpg" },
    { name: "Chicken Republic", img: "/restaurants/chicken-republic.jpg" },
    { name: "Nexus Bites", img: "/restaurants/nexus.jpg" },
    { name: "Nigerian Breeze", img: "/restaurants/nigerian-breeze.jpg" },
    { name: "Deli Luna", img: "/restaurants/deli-luna.jpg" },
  ];

  return (
    <section className="px-6 md:px-20 py-16">
      {/* Section Title */}
      <h2 className="text-2xl font-semibold mb-10 text-center text-gray-900">
        Popular Restaurants
      </h2>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {restaurants.map((rest, index) => (
          <Card
            key={index}
            className="overflow-hidden group rounded-2xl hover:shadow-lg transition cursor-pointer"
          >
            <div className="relative">
              <img
                src={rest.img}
                alt={rest.name}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-3 text-center">
              <p className="font-medium text-gray-800">{rest.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

