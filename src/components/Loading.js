// @flow

import React from "react";

type Props = {
    text: string,
    speed: number,
};

function Loading({ text = "Loading", speed = 200 }: Props) {
    const [loadingText, setLoadingText] = React.useState(text);
    const timerID = React.useRef(null);

    React.useEffect(() => {
        timerID.current = window.setTimeout(() => {
            if (loadingText !== `${text}...`) {
                setLoadingText(t => t + ".");
            } else {
                setLoadingText(text);
            }
        }, speed);

        return () => {
            window.clearTimeout(timerID.current);
        };
    }, [loadingText, text, speed]);

    return <p>{loadingText}</p>;
}

export default Loading;
