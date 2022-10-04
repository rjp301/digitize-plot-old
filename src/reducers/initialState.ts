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
  value?: number;
  permanent?: boolean;
}

export interface State {
  mouse: XY;
  markers: Marker[];
}

export const initialState: State = {
  mouse: { x: 0, y: 0 },
  markers: [
    { id: "y1", x: 50, y: 250, colour: "red", label: "Y1", value: 0 },
    { id: "y2", x: 50, y: 50, colour: "red", label: "Y2", value: 0 },
    { id: "x1", x: 100, y: 300, colour: "blue", label: "X1", value: 0 },
    { id: "x2", x: 300, y: 300, colour: "blue", label: "X2", value: 0 },
  ],
};
