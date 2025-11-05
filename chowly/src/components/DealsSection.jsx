// src/components/DealsSection.jsx
import { Card, CardContent } from "@/components/ui/card";

export default function DealsSection() {
  const deals = [
    {
      title: "Shawarma",
      desc: "Fast Food",
      img: "/deals/shawarma.jpg",
      discount: "-40%",
    },
    {
      title: "Intercontinental & Local Dishes",
      desc: "Veggie’s Kitchen",
      img: "/deals/local-dishes.jpg",
      discount: "-28%",
    },
    {
      title: "Burger",
      desc: "Sally’s Cuisine",
      img: "/deals/burger.jpg",
      discount: "-35%",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Up to -40% 🎉 Chowly exclusive deals
        </h2>

        {/* Filter buttons (optional tabs) */}
        <div className="flex gap-3 mt-4 md:mt-0">
          {["Shawarma", "Pizza & Fast food", "African"].map((item, i) => (
            <button
              key={i}
              className={`px-4 py-1 rounded-full text-sm border ${
                i === 1
                  ? "bg-orange-500 text-white border-orange-500"
                  : "text-gray-700 hover:border-orange-400 hover:text-orange-500"
              } transition`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <Card
            key={index}
            className="overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition rounded-2xl"
          >
            <div className="relative">
              <img
                src={deal.img}
                alt={deal.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {deal.discount}
              </span>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{deal.title}</h3>
              <p className="text-sm text-gray-500">{deal.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
