import { v1 } from "uuid";

export interface MarkerAction {
  type: string;
  id: string;
  x: number;
  y: number;
}

export const types = {
  UPDATE_POSITION: "UPDATE_POSITION",
  ADD_MARKER: "ADD_MARKER",
  REMOVE_MARKER: "REMOVE_MARKER",
};

export const updatePosition = (event: any): MarkerAction => ({
  type: types.UPDATE_POSITION,
  id: event.target.id(),
  x: event.target.x(),
  y: event.target.y(),
});

export const addMarker = (event: any): MarkerAction => ({
  type: types.ADD_MARKER,
  id: v1(),
  x: event.evt.layerX,
  y: event.evt.layerY,
});

export const removeMarker = (event: any): MarkerAction => ({
  type: types.REMOVE_MARKER,
  id: event.target.parent.id(),
  x: 0,
  y: 0,
});
