import React from "react";
import usePanAndZoom from "./usePanAndZoom";
// import "./PanAndZoomImage.css";

export default function PanAndZoomImage({ src }) {
  const { containerRef, onMouseDown, onWheel, translateX, translateY, scale } =
    usePanAndZoom();
  return (
    <div
      className="Image-container flex-grow"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onWheel={onWheel}
    >
      <div
        className="bg-red-500"
        style={{
          transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        }}
      >
        <img className="Image-image" alt="panable-and-zoomable" src={src} />
      </div>
    </div>
  );
}
