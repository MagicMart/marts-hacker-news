// @flow

import React from "react";

type Props = {
    text?: string,
    speed?: number,
    className?: string,
};

function Loading({
    text = "Loading",
    speed = 200,
    className = "loading",
}: Props) {
    const [loadingText, setLoadingText] = React.useState(text);
    const timerID = React.useRef();

    React.useEffect(() => {
        timerID.current = window.setTimeout(() => {
            setLoadingText(state => {
                if (state !== `${text}...`) {
                    return state + ".";
                } else {
                    return text;
                }
            });
        }, speed);

        return () => {
            window.clearTimeout(timerID.current);
        };
    }, [loadingText, text, speed]);

    return <p className={className}>{loadingText}</p>;
}

export default Loading;
