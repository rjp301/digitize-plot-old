export const types = {
  DRAG_START: "DRAG_START",
  DRAG_END: "DRAG_END",
  ADD_MARKER: "ADD_MARKER",
};

export const startDrag = (event) => ({
  type: types.DRAG_START,
  markerId: event.target.id(),
});

export const endDrag = (event) => ({
  type: types.DRAG_END,
  x: event.target.x(),
  y: event.target.y(),
  markerId: event.target.id(),
});

export const addMarker = (event) => ({
  type: types.ADD_MARKER,
  x: event.evt.layerX,
  y: event.evt.layerY,
})