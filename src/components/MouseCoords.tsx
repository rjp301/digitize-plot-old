import React from "react";
import { XY } from "../helpers/types";

export default function MouseCoords(props: { coords: XY }) {
  const { coords } = props;
  
  return (
    <div className="p-4 bg-white">
      <div>{coords.x}</div>
      <div>{coords.y}</div>
    </div>
  );
}