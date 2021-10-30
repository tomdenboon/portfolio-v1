// Import all of our actions
import { SET_TIMER, UPDATE } from '../actions/timerActions';


const timerReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TIMER:
      // Add a new timer, return a copy of state
      return action.payload.timer
    case UPDATE:
      return { ...state, time: state.time += action.payload.deltaTime }
    default:
      return state;
  }
}

export default timerReducer;