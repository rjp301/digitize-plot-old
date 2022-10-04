import { SyntheticEvent } from "react";

export interface Action {
  type: string;
  x?: number;
  y?: number;
  markerId?: string;
}

interface Event {
  target: {
    x: () => number;
    y: () => number;
    id: () => string;
  };
}

export const types = {
  DRAG_START: "DRAG_START",
  DRAG_END: "DRAG_END",
  ADD_MARKER: "ADD_MARKER",
  REMOVE_MARKER: "REMOVE_MARKER",
};

export const startDrag = (event: any): Action => ({
  type: types.DRAG_START,
  markerId: event.target.id(),
});

export const endDrag = (event: any): Action => ({
  type: types.DRAG_END,
  x: event.target.x(),
  y: event.target.y(),
  markerId: event.target.id(),
});

export const addMarker = (event: any): Action => ({
  type: types.ADD_MARKER,
  x: event.evt.layerX,
  y: event.evt.layerY,
});

export const removeMarker = (event: any): Action => ({
  type: types.REMOVE_MARKER,
  markerId: event.target.parent.id(),
});
