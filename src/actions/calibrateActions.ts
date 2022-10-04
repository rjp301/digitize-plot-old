export interface Action {
  type: string;
  id: string;
  value: string;
}

export const types = {
  UPDATE: "UPDATE",
};

export const updateValue = (
  event: { target: HTMLInputElement },
  id: string
): Action => ({
  type: types.UPDATE,
  value: event.target.value,
  id,
});
