import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import navbarReducer from "./reducers/navbarReducer";
import timerReducer from "./reducers/timerReducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["isNavbarLoaded"],
};

const rootReducer = combineReducers({
  isNavbarLoaded: navbarReducer,
  timer: timerReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
