import React from "react";
import XY from "../types/XY";

export default function MouseCoords(props: {
  coords: XY;
  coordsConverter: (coords: XY) => XY;
}) {
  const { coords, coordsConverter } = props;
  const { x, y } = coordsConverter(coords);

  return (
    <div className="p-4 bg-white text-sm">
      <h2 className="font-bold text-base">Mouse Coordinates</h2>
      <div>X: {x.toLocaleString()}</div>
      <div>Y: {y.toLocaleString()}</div>
    </div>
  );
}
