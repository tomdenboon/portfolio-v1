export const SET_TIMER = 'SET_TIMER'
export const setTimer = (timer) => {
  return {
    type: SET_TIMER,
    payload: { timer }
  }
}

export const UPDATE = "UPDATE"
export const update = (deltaTime) => {
  return {
    type: UPDATE,
    payload: { deltaTime }
  }
}
