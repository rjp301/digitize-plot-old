import React, { useRef } from "react";
import ImageType from "../types/Image";
import XY from "../types/XY";

export default function Bullseye({
  stageRef,
  mouseState,
  image,
}: {
  stageRef: any;
  mouseState: XY;
  image: ImageType;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const imgUrl = stageRef.current ? stageRef.current.toDataURL() : "";
  const zoom = 3;
  const x = mouseState.x;
  const y = mouseState.y;
  const w = ref.current ? ref.current.offsetWidth / 2 : 0;
  const h = ref.current ? ref.current.offsetHeight / 2 : 0;

  return (
    <div
      ref={ref}
      className="aspect-square relative overflow-hidden bg-gray-50"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${image.width * zoom}px auto`,
        backgroundPosition: `${w - x * zoom}px ${h - y * zoom}px`,
      }}
    >
      {/* {stageRef.current && (
        <img
          src={stageRef.current.toDataURL()}
          alt="Thumbnail"
          className="h-auto w-auto"
          style={{
            scale: 5,
            // transformOrigin: `${mouseState.x} ${mouseState.y}`,
          }}
        />
      )} */}
      <div className="absolute top-1/2 -translate-y-1/2 h-px w-full bg-gray-500 opacity-50" />
      <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gray-500 opacity-50" />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-700 h-1 w-1 rounded-full" />
    </div>
  );
}
