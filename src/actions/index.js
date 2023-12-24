export const UPDATE = 'UPDATE';
export const update = (time) => {
  return {
    type: UPDATE,
    payload: { time },
  };
};

export const NAVBAR_LOADED = 'NAVBAR_LOADED';
export const isNavbarLoaded = (isLoaded) => {
  return {
    type: NAVBAR_LOADED,
    payload: { isLoaded },
  };
};

export const INCREMENT_THEME = 'INCREMENT_THEME';
export const nextTheme = () => {
  return {
    type: INCREMENT_THEME,
  };
};
