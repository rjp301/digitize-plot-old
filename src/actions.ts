import { SyntheticEvent } from "react";

export const types = {
  DRAG_START: "DRAG_START",
  DRAG_END: "DRAG_END",
  ADD_MARKER: "ADD_MARKER",
  REMOVE_MARKER: "REMOVE_MARKER",
};

export const startDrag = (event: SyntheticEvent) => ({
  type: types.DRAG_START,
  markerId: event.target.id(),
});

export const endDrag = (event: SyntheticEvent) => ({
  type: types.DRAG_END,
  x: event.target.x(),
  y: event.target.y(),
  markerId: event.target.id(),
});

export const addMarker = (event: SyntheticEvent) => ({
  type: types.ADD_MARKER,
  x: event.evt.layerX,
  y: event.evt.layerY,
});

export const removeMarker = (event: SyntheticEvent) => ({
  type: types.REMOVE_MARKER,
  markerId: event.target.parent.id(),
});
