export const UPDATE = "UPDATE";
export const update = (deltaTime) => {
  return {
    type: UPDATE,
    payload: { deltaTime },
  };
};

export const NAVBAR_LOADED = "NAVBAR_LOADED";
export const isNavbarLoaded = (isLoaded) => {
  return {
    type: NAVBAR_LOADED,
    payload: { isLoaded },
  };
};
