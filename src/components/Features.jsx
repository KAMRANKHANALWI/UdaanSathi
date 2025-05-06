import React from "react";
import {
  SparklesIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <MapPinIcon className="w-10 h-10 text-white" />,
    title: "Local Creator Discovery",
    desc: "Connect with authentic local voices who understand your community, culture, and customers. Our geo-matching algorithm finds creators within your target market.",
    bgColor: "bg-emerald-600",
    hoverColor: "group-hover:bg-emerald-700",
    borderColor: "border-emerald-200",
    shadowColor: "shadow-emerald-100",
  },
  {
    icon: <UserGroupIcon className="w-10 h-10 text-white" />,
    title: "Community-Focused Campaigns",
    desc: "Build meaningful relationships with creators and customers in your neighborhood. Drive foot traffic and local engagement with targeted micro-influencer strategies.",
    bgColor: "bg-amber-500",
    hoverColor: "group-hover:bg-amber-600",
    borderColor: "border-amber-200",
    shadowColor: "shadow-amber-100",
  },
  {
    icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-white" />,
    title: "Direct Collaboration Hub",
    desc: "Message, negotiate, and plan campaigns directly with creators. Our built-in tools streamline communication from concept to completion.",
    bgColor: "bg-rose-500",
    hoverColor: "group-hover:bg-rose-600",
    borderColor: "border-rose-200",
    shadowColor: "shadow-rose-100",
  },
  {
    icon: <GlobeAltIcon className="w-10 h-10 text-white" />,
    title: "Local to Global Scaling",
    desc: "Start locally, expand globally. Use successful local campaigns as blueprints to replicate your strategy in new markets with the right creators.",
    bgColor: "bg-purple-600",
    hoverColor: "group-hover:bg-purple-700",
    borderColor: "border-purple-200",
    shadowColor: "shadow-purple-100",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-purple-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block mb-3 px-4 py-1 bg-purple-50 rounded-full text-purple-600 font-medium text-sm">
          <SparklesIcon className="w-4 h-4 inline-block mr-1" />
          Genuine Connections Matter
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 leading-tight">
          Connect With Local Creators<br className="hidden md:block" /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">Who Know Your Community</span>
        </h2>
        <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
          We believe in the power of local influence. Our platform brings together brands and creators 
          who share the same streets, communities, and cultures—creating authentic partnerships that 
          truly resonate.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white hover:bg-gray-50 transition-all duration-300 border ${feature.borderColor} rounded-2xl p-8 ${feature.shadowColor} shadow-lg hover:shadow-xl relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bgColor} opacity-10 rounded-bl-full -z-0 transition-colors`}></div>
              <div className="relative z-10">
                <div className={`mb-6 p-3 ${feature.bgColor} ${feature.hoverColor} rounded-xl inline-block shadow-md transition-colors`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;