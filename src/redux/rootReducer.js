import { combineReducers } from "redux";
// slices
// import designReducer from './slices/design';
import tokenReducer from "./slices/token";

// ----------------------------------------------------------------------

const rootReducer = combineReducers({
  token: tokenReducer,
});

export { rootReducer };
