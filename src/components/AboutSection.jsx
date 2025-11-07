// src/components/AboutSection.jsx
export default function AboutSection() {
  const stats = [
    { label: "Registered Riders", value: "546+" },
    { label: "Orders Delivered", value: "789,900+" },
    { label: "Restaurants Partnered", value: "690+" },
    { label: "Food Items", value: "17,457+" },
  ];

  return (
    <section className="px-6 md:px-20 py-16 text-center bg-gray-50">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
        Know more about us!
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-600 mb-12 leading-relaxed">
        Chowly simplifies the food ordering process. Browse through our diverse menu,
        select your favorite dishes, and proceed to checkout. Your meal will be at
        your doorstep fresh, fast, and perfectly served!
      </p>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl py-6 hover:shadow-lg transition"
          >
            <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
            <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
