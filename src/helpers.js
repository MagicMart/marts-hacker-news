// @flow

export function formatTime(time: number) {
    return new Date(time * 1000).toLocaleString(undefined, {
        dateStyle: "short",
        timeStyle: "short",
    });
}
