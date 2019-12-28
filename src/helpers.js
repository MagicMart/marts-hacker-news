export function formatTime(time) {
    return new Date(time * 1000).toLocaleString(undefined, {
        dateStyle: "short",
        timeStyle: "short",
    });
}
