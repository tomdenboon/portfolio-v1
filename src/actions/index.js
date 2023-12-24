export const SET_TIME = 'SET_TIME';
export const setTime = (time) => {
  return {
    type: SET_TIME,
    payload: time,
  };
};

export const INCREMENT_THEME = 'INCREMENT_THEME';
export const nextTheme = () => {
  return {
    type: INCREMENT_THEME,
  };
};
