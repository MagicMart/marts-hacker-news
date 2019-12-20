// @flow

import React from "react";
import PostsList from "./PostsList";

import { useFetchMainPosts } from "../customHooks";

type Props = {
    type: string,
};

function Posts({ type }: Props) {
    const [posts, error] = useFetchMainPosts(type);

    if (error !== null) {
        return <p>There was an error in fetching the posts</p>;
    }

    if (!posts) {
        return <p>Loading</p>;
    }

    return <PostsList posts={posts} />;
}

export default Posts;
