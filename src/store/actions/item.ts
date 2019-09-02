import { SET_ITEM, TOGGLE_MODAL } from "../types/item";

export function setItem(item: Object) {
  return {
    type: SET_ITEM,
    payload: item
  };
}
export function toggleModal(open: Boolean) {
  return {
    type: TOGGLE_MODAL,
    payload: open
  };
}
