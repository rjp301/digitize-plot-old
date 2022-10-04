import React from "react";
import {  useReducer,} from "react";

import DataTable from "./components/DataTable";
import Calibrate from "./components/Calibrate";
import { Stage, Layer } from "react-konva";
import Bullseye from "./components/Bullseye";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import MouseCoords from "./components/MouseCoords";
import calibrationReducer, {
  initialCalibrationState,
} from "./reducers/calibrationReducer";
import mouseReducer, { initialMouse } from "./reducers/mouseReducer";
import markerReducer, { initialMarkers } from "./reducers/markerReducer";
import getCoordsConverter from "./helpers/getCoordsConverter";
import Marker from "./components/Marker";

function App() {
  const [markerState, markerDispatch] = useReducer(
    markerReducer,
    initialMarkers
  );
  const [calibrationState, calibrationDispatch] = useReducer(
    calibrationReducer,
    initialCalibrationState
  );
  const [mouseState, mouseDispatch] = useReducer(mouseReducer, initialMouse);

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
              width={320}
              height={280}
              // onClick={onLeftClickCanvas}
              onContextMenu={(e) => {
                e.evt.stopImmediatePropagation();
                e.evt.stopPropagation();
                e.evt.preventDefault();
              }}
              className="bg-white"
            >
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
        <Calibrate state={calibrationState} dispatch={calibrationDispatch} />
      </div>
    </div>
  );
}

export default App;
