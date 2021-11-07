// Import all of our actions
import { INCREMENT_THEME } from "../actions";
import defaultTheme from "../themes/defaultTheme";
import stealthTheme from "../themes/stealthTheme";
import monokaiTheme from "../themes/monokaiTheme";

const initialState = {
  theme: defaultTheme,
  count: 0,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_THEME:
      switch (state.count % 3) {
        case 0:
          return { ...state, count: (state.count += 1), theme: monokaiTheme };
        case 1:
          return { ...state, count: (state.count += 1), theme: defaultTheme };
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
