import React, { useEffect, useRef, useState } from "react";

import DataTable from "./components/DataTable";
import Calibrate from "./components/Calibrate";
import { Stage, Layer } from "react-konva";
import Bullseye from "./components/Bullseye";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import MouseCoords from "./components/MouseCoords";
import getCoordsConverter from "./helpers/getCoordsConverter";
import Marker from "./components/Marker";
import useCalibration from "./hooks/useCalibration";
import useMouse from "./hooks/useMouse";
import useMarkers from "./hooks/useMarkers";
import Dropzone from "./components/Dropzone";

import Image from "./types/Image";

const loadImage = (setImageDimensions: any, imageUrl: string) => {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width,
    });
  };
  img.onerror = (err) => {
    console.log("img error");
    console.error(err);
  };
};

export default function App() {
  const {
    calibrationState,
    onCalibrationValueUpdate,
    onCalibrationPositionUpdate,
  } = useCalibration();
  const { mouseState, onMouseMoveOverCanvas } = useMouse();
  const {
    markerState,
    onLeftClickCanvas,
    onRightClickMarker,
    onDragEndMarker,
  } = useMarkers();

  const [image, setImage] = useState<Image>({
    width: 300,
    height: 300,
    src: "",
  });
  const coordsConverter = getCoordsConverter(calibrationState);
  const stageRef = useRef(null);

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <div className="App h-screen flex flex-row overflow-hidden">
      <div className="w-80 flex flex-col shadow z-20 bg-white p-4 overflow-auto">
        <DataTable data={markerState} coordsConverter={coordsConverter} />
      </div>

      <div className="flex-grow h-screen w-full flex items-center justify-center bg-gray-50 ">
        {!image.src ? (
          <Dropzone setImage={setImage} />
        ) : (
          <Stage
            ref={stageRef}
            width={400}
            height={400}
            onClick={onLeftClickCanvas}
            onMouseMove={onMouseMoveOverCanvas}
            onContextMenu={(e) => e.evt.preventDefault()}
            className="bg-white shadow"
          >
            <Layer>
              {Object.keys(calibrationState).map((id) => {
                const marker = (calibrationState as any)[id];
                return (
                  <Marker
                    id={id}
                    key={id}
                    marker={marker}
                    onDragEnd={onCalibrationPositionUpdate}
                    label={marker.label}
                  />
                );
              })}
            </Layer>

            <Layer>
              {markerState.map((marker) => (
                <Marker
                  key={marker.id}
                  marker={marker}
                  onDragEnd={onDragEndMarker}
                  onRightClick={onRightClickMarker}
                />
              ))}
            </Layer>
          </Stage>
        )}
      </div>

      <div className="w-80 flex flex-col shadow z-20">
        <Bullseye stageRef={stageRef} />
        <MouseCoords coords={mouseState} />
        <Calibrate
          state={calibrationState}
          onUpdateValue={onCalibrationValueUpdate}
        />
      </div>
    </div>
  );
}
