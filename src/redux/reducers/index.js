import { combineReducers } from 'redux';

import timerReducer from './timerReducer';

export default combineReducers({
  timers: timerReducer,
});
