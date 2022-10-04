import { State, XY } from "../reducers/markerReducer";

interface LinearInterpValues {
  x: number;
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}

function linearInterp(values: LinearInterpValues): number {
  const { x, x0, x1, y0, y1 } = values;
  return ((y1 - y0) * (x - x0)) / (x1 - x0) + y0;
}

export default function convertCoords(coords: XY, state: State): XY {
  const cal = state.calibrations;

  const xValues = {
    x: coords.x,
    x0: cal.x1.value,
    x1: cal.x2.value,
    y0: cal.x1.x,
    y1: cal.x2.x,
  };

  const yValues = {
    x: coords.y,
    x0: cal.y1.value,
    x1: cal.y2.value,
    y0: cal.y1.y,
    y1: cal.y2.y,
  };

  return {
    x: linearInterp(xValues),
    y: linearInterp(yValues),
  };
}
