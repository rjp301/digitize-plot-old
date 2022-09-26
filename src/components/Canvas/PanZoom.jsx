import React from "react";
import usePanAndZoom from "./usePanAndZoom";

export default function PanZoom({ src }) {
  const { containerRef, onMouseDown, onWheel, translateX, translateY, scale } =
    usePanAndZoom();
  return (
    <div
      className="Image-container"
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
