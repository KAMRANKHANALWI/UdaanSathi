import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Users, BarChart } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 to-black">
      {/* Animated background elements - subtle but keeping purple tones */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-800 opacity-5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-700 opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-600 opacity-5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-blue-700 opacity-5 rounded-full blur-3xl" />

      {/* Grid pattern overlay - subtle but keeping purple */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="flex items-center justify-center mb-6">
          <span className="px-4 py-2 text-sm font-medium text-purple-200 bg-gray-900/60 border border-gray-800/50 rounded-full flex items-center">
            <Sparkles size={14} className="mr-2 text-purple-300" />
            Connecting Brands with India's Top Creators
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold text-center text-white leading-tight mb-6 max-w-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
            Transform
          </span>{" "}
          Your Marketing with Creator Collaborations
        </h1>

        <p className="text-lg text-gray-300 text-center mb-10 max-w-2xl">
          Udaan Sathi is the perfect platform for local Indian brands and
          creators to connect, collaborate, and create impactful marketing
          campaigns with measurable results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="https://tally.so/r/np5g1B"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-gray-900 font-medium bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full hover:from-purple-100 hover:to-indigo-100 hover:shadow-sm transition-all flex items-center gap-2"
          >
            Start for Free <ArrowRight size={16} />
          </a>
          <button
            onClick={() => navigate("/book-free-call")}
            className="px-6 py-3 text-purple-200 font-medium rounded-full border border-purple-800/40 bg-gray-900/40 hover:border-purple-700/60 hover:text-purple-100 transition-all"
          >
            Book a Call
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(147, 51, 234, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(147, 51, 234, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
