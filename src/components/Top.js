// @flow

import React from "react";
import usePosts from "../customHooks/usePosts";

function Top() {
    const posts = usePosts("top");

    if (!posts) {
        return <h1>Loading</h1>;
    }

    return (
        <ul>
            {posts.map(post => {
                const { title, by, time, url, descendants } = post;
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
            })}
        </ul>
    );
}

export default Top;
