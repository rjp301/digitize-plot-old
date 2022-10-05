import React from "react";
import XY from "../types/XY";

export default function MouseCoords(props: { coords: XY }) {
  const { coords } = props;
  
  return (
    <div className="p-4 bg-white text-sm">
      <h2 className="font-bold text-base">Mouse Coordinates</h2>
      <div>X: {coords.x}</div>
      <div>Y: {coords.y}</div>
    </div>
  );
}
