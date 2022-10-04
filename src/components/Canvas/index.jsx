import React from "react";
import { useEffect } from "react";
import { Stage, Layer, Image } from "react-konva";
import Marker from "./Marker";
import OldPanZoom from "./OldPanZoom";
import useMarkers from "./useMarkers";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
    <TransformWrapper centerOnInit>
      <TransformComponent wrapperClass="flex-grow" wrapperStyle={{height: "100vh"}}>
        <Stage
          width={width}
          height={height}
          onClick={onLeftClickCanvas}
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
