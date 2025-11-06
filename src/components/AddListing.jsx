import React from "react";
import {
  Users,
  MapPin,
  ShoppingCart,
  CalendarCheck,
  PlusCircle,
} from "lucide-react";

export default function AddListing() {
  const cards = [
    {
      title: "People",
      desc: "An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.",
      icon: (
        <Users className="w-7 h-7 text-purple-500 group-hover:text-white transition-colors duration-300" />
      ),
      border: "border-purple-500",
      hoverBg: "hover:!bg-[#8164A3]",
    },
    {
      title: "Place",
      desc: "An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.",
      icon: (
        <MapPin className="w-7 h-7 text-lime-600 group-hover:text-white transition-colors duration-300" />
      ),
      border: "border-lime-600",
      hoverBg: "hover:!bg-[#6B7C37]",
    },
    {
      title: "Product",
      desc: "An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.",
      icon: (
        <ShoppingCart className="w-7 h-7 text-red-400 group-hover:text-white transition-colors duration-300" />
      ),
      border: "border-red-400",
      hoverBg: "hover:!bg-[#B65E57]",
    },
    {
      title: "Program",
      desc: "An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.",
      icon: (
        <CalendarCheck className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors duration-300" />
      ),
      border: "border-blue-400",
      hoverBg: "hover:!bg-[#4A89A4]",
    },
  ];

  return (
    <div className="bg-[#fafafa] flex flex-col items-center justify-center pt-8 pb-20 mt-12 px-4 md:px-6">
      {/* Header Section */}
      <div className="flex items-center gap-3 mt-10 mb-6 px-4 text-2xl md:text-3xl font-semibold text-gray-800 w-full max-w-6xl">
        <PlusCircle className="text-[#0ea5e9] w-10 h-10" />
        <h1>Add Your Listing</h1>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`group rounded-2xl border p-6 transition-all duration-300 ease-in-out hover:scale-[1.02] bg-white ${card.border} ${card.hoverBg}`}
          >
            <div className="flex items-center gap-3 mb-4">
              {card.icon}
              <h2 className="text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">
                {card.title}
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-white">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
