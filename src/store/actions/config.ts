import { TOGGLE_DRAWER } from "../types/config";

export function toggleDrawer(open: Boolean) {
  return {
    type: TOGGLE_DRAWER,
    payload: open
  };
}
