import React from "react";
import { useEffect } from "react";
import { Stage, Layer } from "react-konva";
import Marker from "./Marker";
import useMarkers from "./useMarkers";

export default function Canvas(props) {
  const { width, height } = props;

  const {
    markers,
    containerRef,
    onLeftClickCanvas,
    onRightClickMarker,
    onDragStartMarker,
    onDragEndMarker,
  } = useMarkers();

  useEffect(() => {
    console.log(markers);
  }, [markers]);

  return (
    <div
      ref={containerRef}
      className="flex-grow flex flex-col items-center justify-center"
    >
      <Stage width={width} height={height} onClick={onLeftClickCanvas}>
        <Layer>
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              marker={marker}
              onDragStart={onDragStartMarker}
              onDragEnd={onDragEndMarker}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
