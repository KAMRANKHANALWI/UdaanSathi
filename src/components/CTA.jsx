import React from "react";

const CTA = () => {
  return (
    <section
      id="cta"
      className="py-28 px-6 bg-gradient-to-br from-black via-gray-900 to-zinc-800 text-white relative"
    >
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="max-w-3xl mx-auto text-center z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Ready to launch your next campaign?
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
          Whether you’re a brand or a creator, Udaan Sathi is your platform to
          connect, collaborate, and grow with purpose.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Join as Brand
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
