export interface mouseAction {
  type: string;
  x: number;
  y: number;
}

export const types = {
  MOUSE_MOVE: "MOUSE_MOVE",
};

export const mouseMove = (event: any): mouseAction => ({
  type: types.MOUSE_MOVE,
  x: event.evt.offsetX,
  y: event.evt.offsetY,
});
