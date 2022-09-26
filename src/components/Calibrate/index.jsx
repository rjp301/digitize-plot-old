import { useState } from "react";

function Input(props) {
  const { onChange, value, label } = props;
  return (
    <label htmlFor={label} className="flex gap-2 border-b-2 pb-1 items-center">
      {label}:
      <input
        id={label}
        type="text"
        className="w-full rounded p-1"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default function Calibrate(props) {
  const [coords, setCoords] = useState({});

  return (
    <div className="bg-white flex-grow p-4 flex flex-col gap-2">
      <Input
        label="X1"
        value={coords.x1}
        onChange={(event) =>
          setCoords((prev) => ({ ...prev, x1: event.target.value }))
        }
      />
      <Input
        label="X2"
        value={coords.x2}
        onChange={(event) =>
          setCoords((prev) => ({ ...prev, x2: event.target.value }))
        }
      />
      <Input
        label="Y1"
        value={coords.y1}
        onChange={(event) =>
          setCoords((prev) => ({ ...prev, y1: event.target.value }))
        }
      />
      <Input
        label="Y2"
        value={coords.y2}
        onChange={(event) =>
          setCoords((prev) => ({ ...prev, y2: event.target.value }))
        }
      />
    </div>
  );
}
