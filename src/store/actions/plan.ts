import { SET_MEAL, REMOVE_ITEM } from "../types/plan";

export function setMeal(meal: Object) {
  return {
    type: SET_MEAL,
    payload: meal,
  };
}
export function removeItem({ name, plan }) {
  return {
    type: REMOVE_ITEM,
    payload: { name, plan },
  };
}
