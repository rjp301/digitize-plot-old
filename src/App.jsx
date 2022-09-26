import Bullseye from "./components/Bullseye";
import Calibrate from "./components/Calibrate";
import DataDisplay from "./components/DataDisplay";
import Canvas from "./components/Canvas";
import PanZoom from "./components/PanZoom";

function App() {
  return (
    <div className="App h-screen flex flex-row bg-gray-50 overflow-hidden">
      <div className="w-60 flex flex-col shadow z-20">
        <DataDisplay />
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* <Canvas src="BPL220K 24ft.png"/> */}
        <PanZoom>
          <img src="PL87_load_chart.png" alt="" />
        </PanZoom>
      </div>
      <div className="w-60 flex flex-col shadow z-20">
        <Bullseye />
        <Calibrate />
      </div>
    </div>
  );
}

export default App;
