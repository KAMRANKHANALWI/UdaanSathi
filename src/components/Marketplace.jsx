import React, { useRef, useEffect, useState } from "react";

const creators = [
  {
    name: "Tanya Khanijow",
    videoSrc: "/videos/TanyaKhanijow.mp4",
    rating: 5.0,
    location: "Delhi, IN",
    platform: "Instagram",
    category: "Fashion / Beauty",
    color: "bg-gradient-to-br from-pink-100 to-purple-100",
  },
  {
    name: "Bhavna Vyas",
    videoSrc: "/videos/BhavnaVyas.mp4",
    rating: 5.0,
    location: "Delhi, IN",
    platform: "Instagram",
    category: "Fashion / Beauty",
    color: "bg-gradient-to-br from-pink-100 to-purple-100",
  },
  {
    name: "Afreen Khan",
    videoSrc: "/videos/AfreenKhan.mp4",
    rating: 4.9,
    location: "Mumbai, IN",
    platform: "YouTube",
    category: "Tech Reviews",
    color: "bg-gradient-to-br from-blue-100 to-cyan-100",
  },
  {
    name: "Imtiyaz Hussain",
    videoSrc: "/videos/ImtiyazHussain.mp4",
    rating: 4.8,
    location: "Bangalore, IN",
    platform: "TikTok",
    category: "Lifestyle / Fitness",
    color: "bg-gradient-to-br from-orange-100 to-red-100",
  },
  {
    name: "Foodies Delhi",
    videoSrc: "/videos/foodies_delhi.mp4",
    rating: 5.0,
    location: "Lucknow, IN",
    platform: "Instagram",
    category: "Beauty / Skincare",
    color: "bg-gradient-to-br from-green-100 to-teal-100",
  },
  {
    name: "MubinYT Vlogs",
    videoSrc: "/videos/mubinytvlogs.mp4",
    rating: 5.0,
    location: "Chennai, IN",
    platform: "Instagram",
    category: "Makeup / Beauty",
    color: "bg-gradient-to-br from-yellow-100 to-amber-100",
  },
  {
    name: "Radhika",
    videoSrc: "/videos/Radhika.mp4",
    rating: 5.0,
    location: "Chennai, IN",
    platform: "Instagram",
    category: "Makeup / Beauty",
    color: "bg-gradient-to-br from-yellow-100 to-amber-100",
  },
  {
    name: "Umra Urooj",
    videoSrc: "/videos/umra_urooj.mp4",
    rating: 5.0,
    location: "Chennai, IN",
    platform: "Instagram",
    category: "Makeup / Beauty",
    color: "bg-gradient-to-br from-yellow-100 to-amber-100",
  },
];

const VideoCard = ({ creator, videoRef, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="relative h-full rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowDetails(!showDetails)}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={creator.videoSrc}
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"></div>

      {/* Branding */}
      {/* <div className="absolute top-3 left-0 right-0 px-3 flex justify-between items-center">
        <div className="text-white font-bold text-lg">{creator.name}</div>
      </div> */}

      {/* Creator name and rating always visible */}
      <div className="absolute bottom-3 left-0 right-0 px-3 flex justify-between items-center">
        <h3 className="text-white font-medium text-sm">{creator.name}</h3>
      </div>

      {/* Play button overlay on hover */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/30 rounded-full p-2 opacity-75">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

// Add scrollbar styling to global CSS or as a style tag
const scrollbarStyles = `
  /* Hide default scrollbar */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* For touch scrolling */
  .touch-scroll {
    -webkit-overflow-scrolling: touch;
  }
`;

const Marketplace = () => {
  const videoRefs = useRef([]);
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .play()
            .catch((err) => console.log("Autoplay prevented:", err));
        } else {
          entry.target.pause();
        }
      });
    }, options);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Track scroll position for showing/hiding buttons
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  return (
    <section id="marketplace" className="py-16 px-4 md:px-6 bg-black">
      <style>{scrollbarStyles}</style>

      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Top Creators</h2>
            <p className="text-gray-400">
              Handpicked Gen Z influencers for your brand
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable container with navigation buttons */}
      <div className="max-w-6xl mx-auto relative">
        {/* Left scroll button - only show if not at start */}
        {scrollPosition > 10 && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 ml-2"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Right scroll button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 mr-2"
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* The scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 no-scrollbar touch-scroll scroll-smooth pb-4"
          onScroll={handleScroll}
        >
          {creators.map((creator, i) => (
            <div
              key={i}
              className="aspect-[9/16] h-[60vh] md:h-[50vh] flex-none"
            >
              <VideoCard
                creator={creator}
                videoRef={(el) => (videoRefs.current[i] = el)}
                index={i}
              />
            </div>
          ))}
        </div>

        {/* Optional: Scroll indicator dots */}
        <div className="flex justify-center mt-4 gap-2">
          {creators.map((_, i) => (
            <button
              key={i}
              className="h-2 w-2 rounded-full bg-gray-500"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                const cardWidth =
                  scrollContainerRef.current.scrollWidth / creators.length;
                scrollContainerRef.current.scrollTo({
                  left: cardWidth * i,
                  behavior: "smooth",
                });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
