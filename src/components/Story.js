import React from "react";

function Story({ post }) {
    const { url, title, by, time, descendants } = post;
    return (
        <li>
            <a href={url}>
                <p>{title}</p>
                <p>
                    by {by} on {time}, with {descendants} comments
                </p>
            </a>
        </li>
    );
}

export default Story;
