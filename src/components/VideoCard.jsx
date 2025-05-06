// components/VideoCard.jsx
import React, { useState } from "react";

const VideoCard = ({ creator, videoRef, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="relative h-full rounded-2xl overflow-hidden min-w-[280px] max-w-sm backdrop-blur-xl shadow-md ring-1 ring-gray-200 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 flex-shrink-0"
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
        className="h-64 w-full object-cover transition-transform group-hover:scale-105 duration-300"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* Tags + branding */}
      <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
        <div className="text-white font-bold text-sm">SUPERcreator</div>
        <div className="flex gap-1">
          {creator.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs ${
                tag === "Top Creator" ? "bg-black/70" : "bg-green-500"
              } text-white px-2 py-0.5 rounded-full`}
            >
              {tag === "Top Creator" ? "🧠" : "⚡"}
            </span>
          ))}
        </div>
      </div>

      {/* Basic Info */}
      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
        <h3 className="text-white font-medium text-sm">{creator.name}</h3>
        <span className="text-yellow-400 text-xs">⭐ {creator.rating}</span>
      </div>

      {/* CTA on hover */}
      {isHovered && (
        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="bg-white/90 text-black text-xs font-medium rounded-full px-3 py-1.5">
            Read the case study →
          </span>
        </div>
      )}

      {/* Expand details on click */}
      {showDetails && (
        <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-4 space-y-2">
          <h3 className="text-white font-bold text-lg">{creator.name}</h3>
          <p className="text-gray-300 text-xs">
            {creator.location} • {creator.platform}
          </p>
          <p className="text-white text-sm">{creator.category}</p>
          <p className="text-white font-bold text-lg mt-2">{creator.price}</p>
          <button className="bg-white text-black rounded-full px-4 py-1.5 text-sm font-medium mt-2">
            Book Now
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
