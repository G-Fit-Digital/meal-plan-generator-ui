import { SET_ITEM } from "../types/item";

export function setItem(item: Object) {
  console.log("HERE");
  console.log(item);
  return {
    type: SET_ITEM,
    payload: item
  };
}
