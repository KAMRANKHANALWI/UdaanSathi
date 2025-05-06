import React from "react";

const brands = [
  { name: "DilliStyle", logo: "/brands/dillistyle.svg" },
  { name: "NehruThreads", logo: "/brands/nehru.svg" },
  { name: "Lajpat Luxe", logo: "/brands/lajpat.svg" },
  { name: "ChandniCharm", logo: "/brands/chandni.svg" },
  { name: "SadarPrints", logo: "/brands/sadar.svg" },
  { name: "KhanMarket", logo: "/brands/khanmarket.svg" },
  { name: "Karol Bagh Fit", logo: "/brands/karolfit.svg" },
];

const BrandsMarquee = () => {
  return (
    <section className="bg-black py-10 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee flex gap-12 items-center">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.name}
            className="h-10 w-auto opacity-70 hover:opacity-100 transition duration-300"
          />
        ))}
        {/* duplicate for seamless loop */}
        {brands.map((brand, index) => (
          <img
            key={`${index}-copy`}
            src={brand.logo}
            alt={brand.name}
            className="h-10 w-auto opacity-70 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default BrandsMarquee;
