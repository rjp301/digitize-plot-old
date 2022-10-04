import Calibrate from "./components/Calibrate";
import { createContext, useRef, useState } from "react";
import DataTable from "./components/DataTable";
import Canvas from "./components/Canvas.jsx";

export const StateContext = createContext();

function App() {

  return (
    <div className="App h-screen flex flex-row bg-gray-50 overflow-hidden">
      <div className="w-60 flex flex-col shadow z-20 bg-white p-4">
        <DataTable data={data} />
      </div>

      <Canvas width={300} height={300} />
      <div className="w-60 flex flex-col shadow z-20">
        {/* Bullseye */}
        <div
          className="aspect-square bg-blue-500 relative"
        >
          <div className="absolute top-1/2 -translate-y-1/2 h-px w-full bg-gray-500 opacity-50" />
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gray-500 opacity-50" />
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-700 h-1 w-1 rounded-full" />
        </div>

        {/* Mouse coordinates */}
        <div className="p-4 bg-white">
          <div>{mouse.x}</div>
          <div>{mouse.y}</div>
        </div>

        {/* Calibrations */}
        <Calibrate />
      </div>
    </div>
  );
}

export default App;
