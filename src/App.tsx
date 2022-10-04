import React from "react";
import { createContext, useReducer, useRef, useState } from "react";

import DataTable from "./components/DataTable";
import Calibrate from "./components/Calibrate";
import Canvas from "./components/Canvas";
import Bullseye from "./components/Bullseye";

import { initialState } from "./reducers/initialState";
import reducer from "./reducers/markerReducer";
import MouseCoords from "./components/MouseCoords";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App h-screen flex flex-row bg-gray-50 overflow-hidden">
      <div className="w-60 flex flex-col shadow z-20 bg-white p-4">
        <DataTable data={state.markers} />
      </div>

      <div className="flex-grow">
        <Canvas width={300} height={300} />
      </div>

      <div className="w-60 flex flex-col shadow z-20">
        <Bullseye />
        <MouseCoords coords={state.mouse} />
        <Calibrate state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
