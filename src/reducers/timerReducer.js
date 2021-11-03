// Import all of our actions
import { UPDATE } from "../actions";

const timerReducer = (state = { name: "The Timer", time: 0 }, action) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, time: (state.time += action.payload.deltaTime) };
    default:
      return state;
  }
};

export default timerReducer;
