export interface mouseAction {
  type: string;
  x: number;
  y: number;
}

export const types = {
  MOUSE_ENTER: "MOUSE_ENTER",
  MOUSE_LEAVE: "MOUSE_LEAVE",
  MOUSE_MOVE: "MOUSE_MOVE",
};

export const mouseMove = (event: any): mouseAction => ({
  type: types.MOUSE_MOVE,
  x: event.target.x,
  y: event.target.y,
});
