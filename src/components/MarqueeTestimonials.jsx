import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Zahra",
    title: "Restaurant & Café",
    quote:
      "Campaign setup was fast and transparent. We connected with 12+ influencers within days.",
    avatar: "/public/zehra.jpg",
    gradient: "from-rose-600 to-orange-600",
    accentColor: "bg-rose-100",
  },
  {
    name: "Imtiyaz Hussain",
    title: "Food Vlogger, Creator",
    quote:
      "Partnering with regional brands has never been easier. The platform is sleek and the experience feels premium.",
    avatar: "/public/Imtiyaz Hussain.jpg",
    gradient: "from-emerald-600 to-teal-600",
    accentColor: "bg-emerald-100",
  },
  {
    name: "Afreen Khan",
    title: "Creator",
    quote:
      "Udaan Sathi gave me direct access to brand deals I genuinely connect with. It feels like creators finally have a platform built for us.",
    avatar: "/public/AfreenKhan.jpg",
    gradient: "from-emerald-600 to-teal-600",
    accentColor: "bg-emerald-100",
  },
  {
    name: "Mubin YT Vlogs",
    title: "Vlogger, Creator",
    quote:
      "Udaan Sathi bridges the gap between creators and brands beautifully. Every collaboration feels aligned and truly meaningful.",
    avatar: "/public/MubinYTVlogs.jpg",
    gradient: "from-blue-600 to-indigo-600",
    accentColor: "bg-blue-100",
  },
];

const MarqueeTestimonials = () => {
  const repeatedTestimonials = [...testimonials, ...testimonials]; // for infinite illusion

  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Loved by Creators & Brands
        </h2>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {repeatedTestimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-[350px] max-w-[350px] bg-white rounded-2xl border border-gray-100  p-6 flex-shrink-0"
              >
                <p className="text-gray-700 mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-full ${t.accentColor} blur-sm -z-10 opacity-40`}
                    ></div>
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-br ${t.gradient} rounded-full opacity-60`}
                    ></div>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full border-2 border-white relative z-10"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-500">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeTestimonials;
