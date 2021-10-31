// Import all of our actions
import { SET_TIMER, UPDATE } from '../actions';
import Timer from '../Timer'

const timerReducer = (state = null, action) => {
  switch (action.type) {
    case SET_TIMER:
      // Add a new timer, return a copy of state
      return new Timer(action.payload.name, action.payload.time)
    case UPDATE:
      state.time += action.payload.deltaTime
      return state;
    default:
      return state;
  }
}

export default timerReducer;