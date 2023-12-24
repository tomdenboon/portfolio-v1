import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import timerReducer from './reducers/timerReducer';
import themeReducer from './reducers/themeReducer';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  timer: timerReducer,
  theme: themeReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
