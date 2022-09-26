import React from "react";
import usePanAndZoom from "./usePanAndZoom";

export default function PanZoom(props) {
  const { containerRef, onMouseDown, onWheel, translateX, translateY, scale } =
    usePanAndZoom();
  return (
    <div
      className="Image-container"
      onMouseDown={onMouseDown}
      onWheel={onWheel}
    >
      <div
        ref={containerRef}
        style={{
          transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
