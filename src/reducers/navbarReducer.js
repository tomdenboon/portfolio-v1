// Import all of our actions
import { NAVBAR_LOADED } from "../actions";

const navbarReducer = (state = false, action) => {
  switch (action.type) {
    case NAVBAR_LOADED:
      // Add a new timer, return a copy of state
      return action.payload.isLoaded;
    default:
      return state;
  }
};

export default navbarReducer;
