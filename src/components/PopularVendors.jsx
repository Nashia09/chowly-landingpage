// src/components/PopularVendors.jsx
import { Card, CardContent } from "./ui/card";

export default function PopularVendors() {
  const vendors = [
    { name: "Mama Cass", img: "/vendors/mama-cass.jpg" },
    { name: "Tantalizers", img: "/vendors/tantalizers.jpg" },
    { name: "Sweet Sensation", img: "/vendors/sweet-sensation.jpg" },
    { name: "Crunchies", img: "/vendors/crunchies.jpg" },
    { name: "Mr. Biggs", img: "/vendors/mr-biggs.jpg" },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      {/* Section Title */}
      <h2 className="text-2xl font-semibold mb-10 text-center text-gray-900">
        Popular Vendors
      </h2>

      {/* Vendor Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {vendors.map((vendor, index) => (
          <Card
            key={index}
            className="overflow-hidden group rounded-2xl hover:shadow-lg transition cursor-pointer"
          >
            <div className="relative">
              <img
                src={vendor.img}
                alt={vendor.name}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-3 text-center">
              <p className="font-medium text-gray-800">{vendor.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
