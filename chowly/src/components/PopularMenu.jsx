// src/components/PopularMenu.jsx
import { Card, CardContent } from "@/components/ui/card";

export default function PopularMenu() {
  const menus = [
    { name: "Amala", img: "/menu/amala.jpg" },
    { name: "Jollof Rice", img: "/menu/jollof-rice.jpg" },
    { name: "Pasta", img: "/menu/pasta.jpg" },
    { name: "Pizza", img: "/menu/pizza.jpg" },
    { name: "Breakfast", img: "/menu/breakfast.jpg" },
  ];

  return (
    <section className="bg-gray-50 px-6 md:px-20 py-16">
      {/* Section Title */}
      <h2 className="text-2xl font-semibold mb-10 text-center text-gray-900">
        Popular Menu
      </h2>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {menus.map((menu, index) => (
          <Card
            key={index}
            className="overflow-hidden group rounded-2xl hover:shadow-lg transition cursor-pointer"
          >
            <div className="relative">
              <img
                src={menu.img}
                alt={menu.name}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-3 text-center">
              <p className="font-medium text-gray-800">{menu.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
