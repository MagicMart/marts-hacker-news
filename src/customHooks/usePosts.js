// @flow

import React from "react";
import { fetchMainPosts } from "../api/api";

function usePosts(type: string) {
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        fetchMainPosts(type).then(posts => setPosts(posts));
        return () => setPosts(null);
    }, [type]);

    return posts;
}

export default usePosts;
