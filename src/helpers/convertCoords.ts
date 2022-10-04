import { State, XY } from "../reducers/initialState";

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
  const markerX1 = state.calibrations.x1;
  const markerX2 = state.calibrations.x2;
  const markerY1 = state.calibrations.y1;
  const markerY2 = state.calibrations.y2;

  const xValues = {
    x: coords.x,
    x0: markerX1.value,
    x1: markerX2.value,
    y0: markerX1.x,
    y1: markerX2.x,
  };

  const yValues = {
    x: coords.y,
    x0: markerY1.value,
    x1: markerY2.value,
    y0: markerY1.y,
    y1: markerY2.y,
  };

  return {
    x: linearInterp(xValues),
    y: linearInterp(yValues),
  };
}
