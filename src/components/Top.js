// @flow

import React from "react";
import usePosts from "../customHooks/usePosts";
import Story from "./Story";

function Top() {
    const posts = usePosts("top");

    if (!posts) {
        return <h1>Loading</h1>;
    }

    return (
        <ul>
            {posts.map(post => {
                return <Story post={post} />;
            })}
        </ul>
    );
}

export default Top;
