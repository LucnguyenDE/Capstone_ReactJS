import userReducer from "./reducers/userReducer";

import { combineReducers } from "redux";
import chairReducer from "./reducers/chairReducer";
import ticketReducer from "./reducers/ticketReducer";

export const rootReducer = combineReducers({
  userReducer,
  chairReducer,
  ticketReducer,
});
