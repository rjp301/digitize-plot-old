import Calibrate from "./components/Calibrate";
import { createContext, useRef, useState } from "react";
import DataTable from "./components/DataTable";
import Canvas from "./components/Canvas/index.jsx";

export const StateContext = createContext();

function App() {
  const [state, setState] = useState({
    x1: { x: 1, y: 0, v: 0 },
    x2: { x: 9, y: 0, v: 0 },
    y1: { x: 0, y: 1, v: 0 },
    y2: { x: 0, y: 9, v: 0 },

    mouseX: 0,
    mouseY: 0,
    data: [],
  });

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([]);

  const imgRef = useRef();

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
          style={{
            backgroundImage: `url(${imgRef.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imgRef.width}px ${imgRef.height}px`,
          }}
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
