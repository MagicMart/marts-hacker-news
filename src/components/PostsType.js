// @flow

import React from "react";
import PostsList from "./PostsList";

import { fetchMainPosts } from "../api/api";

type Props = {
    type: string,
};

function PostsType({ type }: Props) {
    const [posts, setPosts] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetchMainPosts(type)
            .then(posts => setPosts(posts))
            .catch(error => {
                setError(error);
                console.error(error);
            });
    }, [type]);

    if (error !== null) {
        return <p>There was an error in fetching the posts</p>;
    }

    if (!posts) {
        return <p>Loading</p>;
    }

    return <PostsList posts={posts} />;
}

export default PostsType;
