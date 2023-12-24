// Import all of our actions
import { SET_TIME } from '../actions';

const timerReducer = (state = { time: undefined }, action) => {
  switch (action.type) {
    case SET_TIME:
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

export default timerReducer;
