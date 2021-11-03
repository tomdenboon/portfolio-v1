const TIMER_STATE = "TMRZ_STATE";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(TIMER_STATE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(TIMER_STATE, serializedState);
  } catch (err) {
    console.log("Error saving data");
  }
};

export const formatTime = (time) => {
  let secString = "";
  let minuteString = "";
  let hourString = "";
  const ms = Math.round(time / 100) % 10;
  const secs = Math.floor(time / 1000) % 60;
  if (secs < 10) {
    secString += `0${secs}.`;
  } else {
    secString = `${secs}.`;
  }
  const mins = Math.floor(time / 1000 / 60) % 60;
  if (mins < 10) {
    minuteString += `0${mins}.`;
  } else {
    minuteString = `${mins}.`;
  }
  const hrs = Math.floor(time / 1000 / 60 / 60);
  hourString = `${hrs}.`;
  return hourString + minuteString + secString + `${ms}`;
};
