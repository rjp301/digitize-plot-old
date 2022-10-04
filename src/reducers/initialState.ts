export interface XY {
  x: number;
  y: number;
  [key: string]: any;
}

export interface Marker {
  id: string;
  x: number;
  y: number;
  colour?: string;
  label?: string;
}

export interface CalibrationMarker {
  x: number;
  y: number;
  colour: string;
  label: string;
  value: number;
}

export interface State {
  mouse: XY;
  markers: Marker[];
  calibrations: {
    x1: CalibrationMarker;
    x2: CalibrationMarker;
    y1: CalibrationMarker;
    y2: CalibrationMarker;
  };
}

export const initialState: State = {
  mouse: { x: 0, y: 0 },
  calibrations: {
    y1: { x: 50, y: 250, colour: "red", label: "Y1", value: 0 },
    y2: { x: 50, y: 50, colour: "red", label: "Y2", value: 0 },
    x1: { x: 100, y: 300, colour: "blue", label: "X1", value: 0 },
    x2: { x: 300, y: 300, colour: "blue", label: "X2", value: 0 },
  },
  markers: [],
};
