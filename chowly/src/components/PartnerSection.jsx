// src/components/PartnerSection.jsx
import { Button } from "@/components/ui/button";

export default function PartnerSection() {
  const partners = [
    {
      title: "Partner with us",
      desc: "Sign up as a business to grow your reach and boost your orders.",
      img: "/partners/vendor.jpg",
      cta: "Get Started",
    },
    {
      title: "Ride with us",
      desc: "Become a Chowly Rider and earn while delivering happiness.",
      img: "/partners/rider.jpg",
      cta: "Get Started",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-6 px-6 md:px-20 py-16 bg-orange-50 items-center justify-between">
      {partners.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl overflow-hidden flex-1 group hover:shadow-lg transition"
        >
          <div className="relative h-48 md:h-56 overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
              {item.cta}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
