import React, { useState } from "react";

const LazyLoadedImage = ({ src, alt, className, placeholder }) => {
  const [loaded, setLoaded] = useState(false);

  // Preload the image
  const handleImageLoad = () => {
    setLoaded(true); // Set state to loaded when the image is ready
  };

  return (
    <div className={`${className && className} flex-center-both relative`}>
      {/* Placeholder or skeleton loader */}
      {!loaded && (
        <>
          <div
            className="placeholder rounded-full"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: placeholder || "#f0f0f0",
            }}
          />
          <h4 className="h4 z-[10] font-semibold text-zinc-500/50">
            Profile...
          </h4>
        </>
      )}
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={`actual-image h-full ${loaded ? "visible" : "hidden"} object-contain`}
        style={{
          position: "relative",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out", // Smooth fade-in effect
        }}
      />
    </div>
  );
};

export default LazyLoadedImage;
