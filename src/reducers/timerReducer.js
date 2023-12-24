// Import all of our actions
import { UPDATE } from '../actions';

const timerReducer = (state = { time: 0 }, action) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, time: action.payload.time };
    default:
      return state;
  }
};

export default timerReducer;
