export const SET_TIMER = 'SET_TIMER'
export const setTimer = (name, time) => {
  return {
    type: SET_TIMER,
    payload: { name, time }
  }
}

export const UPDATE = "UPDATE"
export const update = (deltaTime) => {
  return {
    type: UPDATE,
    payload: { deltaTime }
  }
}
