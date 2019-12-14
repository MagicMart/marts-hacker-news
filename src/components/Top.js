// @flow

import React from "react";
import usePosts from "../customHooks/usePosts";
import Story from "./Story";

function Top() {
    const [posts, error] = usePosts("top");

    if (error !== null) {
        return <p>There was an error in fetching the posts</p>;
    }

    if (!posts) {
        return <p>Loading</p>;
    }

    return (
        <ul>
            {posts.map(post => {
                return <Story key={post.title + post.by} post={post} />;
            })}
        </ul>
    );
}

export default Top;
