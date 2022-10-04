import React from "react";
import { useEffect } from "react";
import { Stage, Layer } from "react-konva";
import Marker from "./Marker";
import useMarkers from "../hooks/useMarkers";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Canvas(props: { width: number; height: number }) {
  const { width, height } = props;

  const {
    markers,
    onLeftClickCanvas,
    onRightClickMarker,
    onDragStartMarker,
    onDragEndMarker,
  } = useMarkers();

  useEffect(() => {
    console.log(markers);
  }, [markers]);

  return (
    <TransformWrapper centerOnInit>
      <TransformComponent wrapperStyle={{ height: "100vh", width: "100%" }}>
        <Stage
          width={width}
          height={height}
          onClick={onLeftClickCanvas}
          onContextMenu={(e) => {
            e.evt.stopImmediatePropagation();
            e.evt.stopPropagation();
            e.evt.preventDefault();
          }}
          className="bg-white"
        >
          <Layer>
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                marker={marker}
                onDragStart={onDragStartMarker}
                onDragEnd={onDragEndMarker}
                onRightClick={onRightClickMarker}
                showCoords
                label="coords"
              />
            ))}
          </Layer>
        </Stage>
      </TransformComponent>
    </TransformWrapper>
  );
}
