import React from "react";
import { useReducer } from "react";

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

function App() {
  const {
    calibrationState,
    onCalibrationValueUpdate,
    onCalibrationPositionUpdate,
  } = useCalibration();

  const { mouseState, onMouseMoveOverCanvas } = useMouse();

  const { markerState } = useMarkers();

  const coordsConverter = getCoordsConverter(calibrationState);

  return (
    <div className="App h-screen flex flex-row bg-gray-50 overflow-hidden">
      <div className="w-60 flex flex-col shadow z-20 bg-white p-4">
        <DataTable data={markerState} coordsConverter={coordsConverter} />
      </div>

      <div className="flex-grow">
        <TransformWrapper centerOnInit>
          <TransformComponent wrapperStyle={{ height: "100vh", width: "100%" }}>
            <Stage
              width={400}
              height={400}
              // onClick={onLeftClickCanvas}
              onMouseMove={onMouseMoveOverCanvas}
              onContextMenu={(e) => {
                e.evt.stopImmediatePropagation();
                e.evt.stopPropagation();
                e.evt.preventDefault();
              }}
              className="bg-white"
            >
              <Layer>
                {Object.keys(calibrationState).map((id) => {
                  const marker = (calibrationState as any)[id];
                  return (
                    <Marker
                      key={id}
                      marker={marker}
                      onDragEnd={onCalibrationPositionUpdate}
                      showCoords
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
                    // onDragStart={onDragStartMarker}
                    // onDragEnd={onDragEndMarker}
                    // onRightClick={onRightClickMarker}
                    showCoords
                    label="coords"
                  />
                ))}
              </Layer>
            </Stage>
          </TransformComponent>
        </TransformWrapper>
      </div>

      <div className="w-60 flex flex-col shadow z-20">
        <Bullseye />
        <MouseCoords coords={mouseState} />
        <Calibrate
          state={calibrationState}
          onUpdateValue={onCalibrationValueUpdate}
        />
      </div>
    </div>
  );
}

export default App;
