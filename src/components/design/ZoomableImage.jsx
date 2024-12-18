import React, { useState } from "react";

const ZoomableComponent = ({ image }) => {
  const [scale, setScale] = useState(1); // Zoom level
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Drag position
  const [dragging, setDragging] = useState(false); // Drag state
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomSpeed = 0.1; // Adjust zoom sensitivity
    const newScale = e.deltaY < 0 ? scale + zoomSpeed : scale - zoomSpeed;
    setScale(Math.max(1, newScale)); // Minimum scale is 1
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - startPosition.x,
      y: e.clientY - startPosition.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="relative h-full w-full overflow-hidden border border-gray-300"
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="absolute cursor-grab"
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: "center",
        }}
      >
        {/* Zoomable content */}
        <img src={image} alt="Zoomable" className="h-auto w-auto" />
      </div>
    </div>
  );
};

export default ZoomableComponent;
