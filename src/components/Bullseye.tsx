import React from "react";

export default function Bullseye(props: { stageRef: any }) {
  const { stageRef } = props;
  


  return (
    <div className="aspect-square bg-blue-500 relative">
      {stageRef.current && <img src={stageRef.current.toDataURL} alt="" />}
      <div className="absolute top-1/2 -translate-y-1/2 h-px w-full bg-gray-500 opacity-50" />
      <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gray-500 opacity-50" />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-700 h-1 w-1 rounded-full" />
    </div>
  );
}
