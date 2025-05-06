import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const cards = [
  {
    bg: "bg-indigo-700 text-white",
    title: "“I can't even imagine going back to a time before Udaan Sathi.”",
    subtitle: "– Marketing Lead, FreshRoots",
    cta: "Read the case study",
  },
  {
    bg: "bg-white text-black",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    label: "Uber India",
    cta: "Read the case study",
  },
  {
    bg: "bg-lime-200 text-gray-900",
    title: "In just 2 months:",
    bullet: ["300+ creators joined", "8,000+ brand shares", "12.9M impressions"],
    cta: "Read the case study",
  },
  {
    bg: "bg-blue-200 text-gray-900",
    title: "“Udaan Sathi has been my game-changer.”",
    subtitle: "— Rhea Kapoor, Beauty Creator",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    cta: "Read the case study",
  },
  {
    bg: "bg-orange-200 text-gray-900",
    title: "Results with Udaan Sathi:",
    bullet: ["2x higher CTR", "70% repeat collabs", "Faster onboarding"],
    cta: "See the data",
  },
  {
    bg: "bg-neutral-900 text-white",
    title: "“Everything from outreach to payment just works.”",
    subtitle: "– Aman Joshi, D2C Founder",
    cta: "Read his experience",
  },
];

const Featured = () => {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-2">Featured</h2>
        <p className="text-gray-300">Hire top influencers across all platforms</p>
      </div>

      <div className="flex overflow-x-auto gap-6 no-scrollbar scroll-smooth px-1 md:px-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`min-w-[280px] md:min-w-[340px] rounded-2xl p-6 shadow-md flex flex-col justify-between ${card.bg}`}
          >
            {/* Optional Image */}
            {card.image && (
              <img
                src={card.image}
                alt=""
                className="w-full h-48 rounded-xl object-cover mb-4"
              />
            )}

            {/* Optional Avatar + Subtitle */}
            {card.avatar && (
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={card.avatar}
                  alt={card.subtitle}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="text-sm">{card.subtitle}</p>
              </div>
            )}

            {/* Title */}
            {card.title && <h3 className="text-xl font-semibold mb-4">{card.title}</h3>}

            {/* Bullets */}
            {card.bullet && (
              <ul className="text-sm space-y-1 mb-4">
                {card.bullet.map((b, j) => (
                  <li key={j}>• {b}</li>
                ))}
              </ul>
            )}

            {/* Subtitle if not avatar */}
            {!card.avatar && card.subtitle && (
              <p className="text-sm text-gray-300 mb-4">{card.subtitle}</p>
            )}

            {/* CTA Button */}
            {card.cta && (
              <button className="text-sm font-medium inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-80 transition">
                {card.cta}
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
