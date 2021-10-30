export const formatTime = (time) => {
    const ms = Math.round(time / 100) % 10
    const secs = Math.floor(time / 1000) % 60
    const mins = Math.floor(time / 1000 / 60) % 60
    const hrs = Math.floor(time / 1000 / 1000 / 60) % 60
    return `${hrs}:${mins}:${secs}.${ms}`
}