import { SyntheticEvent } from "react";

export interface Action {
  type: string;
  x?: number;
  y?: number;
}

export const types = {
  MOUSE_ENTER: "MOUSE_ENTER",
  MOUSE_LEAVE: "MOUSE_LEAVE",
  MOUSE_MOVE: "MOUSE_MOVE",
};

export const mouseEnter = (event: any): Action => ({
  type: types.MOUSE_ENTER,
});

export const mouseLeave = (event: any): Action => ({
  type: types.MOUSE_LEAVE,
});

export const mouseMove = (event: any): Action => ({
  type: types.MOUSE_MOVE,
  x: event.target,
  y: event.target.y,
});
