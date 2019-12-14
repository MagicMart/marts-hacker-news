// @flow

import React from "react";
import usePosts from "../customHooks/usePosts";
import Story from "./Story";

function New() {
    const [posts, error] = usePosts("new");

    if (error !== null) {
        return <p>There was an error in fetching the posts</p>;
    }

    if (!posts) {
        return <p>Loading</p>;
    }

    return (
        <ul>
            {posts.map(post => {
                return <Story post={post} />;
            })}
        </ul>
    );
}

export default New;
