import { combineReducers } from "redux";
import { AppReducer } from "./ducks/app";

import { TableReducer } from "./ducks/table";

export default combineReducers({
  table: TableReducer,
  app: AppReducer,
});
