import { SET_MEAL } from "../types/plan";

export function setMeal(meal: Object) {
  return {
    type: SET_MEAL,
    payload: meal,
  };
}
