import { combineReducers } from "redux";
import itemReducer from "./reducers/item";
import configReducer from "./reducers/config";
import planReducer from "./reducers/plan";

const rootReducer = combineReducers({
  itemReducer,
  configReducer,
  planReducer,
});
export default rootReducer;
