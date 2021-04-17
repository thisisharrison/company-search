import { combineReducers } from "redux";
import session from "./session_api_reducer";
import errors from "./errors_reducer";
import entities from "./entities_reducer";
import user from "./user_reducer";

const rootReducer = combineReducers({
  session,
  errors,
  entities,
  user,
});

export default rootReducer;
