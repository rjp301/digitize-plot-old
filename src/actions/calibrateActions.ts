// actions pertaining to calibration markers (red and blue)

export interface CalibrationAction {
  type: string;
  id: string;
  value?: string;
  x?: number;
  y?: number;
}

export const types = {
  UPDATE_VALUE: "UPDATE_VALUE",
  UPDATE_POSITION: "UPDATE_POSITION",
};

export const updateValue = (
  event: { target: HTMLInputElement },
  id: string
): CalibrationAction => ({
  type: types.UPDATE_VALUE,
  value: event.target.value,
  id,
});

export const updatePosition = (event: any): CalibrationAction => ({
  type: types.UPDATE_POSITION,
  id: event.target.id(),
  x: event.target.x(),
  y: event.target.y(),
});
