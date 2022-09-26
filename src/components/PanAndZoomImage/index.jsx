import React from "react";
import usePanAndZoom from "./usePanAndZoom";
// import "./PanAndZoomImage.css";

export default function PanAndZoomImage({ src }) {
  const { containerRef, onMouseDown, onWheel, translateX, translateY, scale } =
    usePanAndZoom();
  return (
    <div
      className="Image-container bg-red-500 h-screen"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onWheel={onWheel}
    >
      <div
        style={{
          transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        }}
      >
        <img className="Image-image" alt="panable-and-zoomable" src={src} />
      </div>
    </div>
  );
}
