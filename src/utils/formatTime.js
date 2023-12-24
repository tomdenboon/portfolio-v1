export const formatTime = (time) => {
  const ms = Math.round(time / 100) % 10;
  const secs = Math.floor(time / 1000) % 60;
  const mins = Math.floor(time / 1000 / 60) % 60;
  const hrs = Math.floor(time / 1000 / 60 / 60);

  const secString = secs < 10 ? `0${secs}` : `${secs}`;
  const minuteString = mins < 10 ? `0${mins}` : `${mins}`;

  return `${hrs}:${minuteString}:${secString}.${ms}`;
};
