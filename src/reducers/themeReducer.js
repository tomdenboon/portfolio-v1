// Import all of our actions
import { INCREMENT_THEME } from "../actions";
import defaultTheme from "../themes/defaultTheme";
import testTheme from "../themes/testTheme";
import stealthTheme from "../themes/stealthTheme";

const initialState = {
  theme: defaultTheme,
  count: 0,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_THEME:
      state.count += 1;
      state.count = state.count % 3;
      switch (state.count) {
        case 0:
          return { ...state, count: (state.count += 1), theme: defaultTheme };
        case 1:
          return { ...state, count: (state.count += 1), theme: testTheme };
        case 2:
          return { ...state, count: (state.count += 1), theme: stealthTheme };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default themeReducer;
