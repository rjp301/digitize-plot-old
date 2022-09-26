import Bullseye from "./components/Bullseye";
import Calibrate from "./components/Calibrate";
import DataDisplay from "./components/DataDisplay";
import PanAndZoomImage from "./components/PanAndZoomImage";

function App() {
  return (
    <div className="App h-screen flex flex-row bg-gray-200">
      <div className="w-60 flex flex-col">
        <DataDisplay />
      </div>
      <PanAndZoomImage src="" />
      <div className="w-60 flex flex-col">
        <Bullseye />
        <Calibrate />
      </div>
    </div>
  );
}

export default App;
