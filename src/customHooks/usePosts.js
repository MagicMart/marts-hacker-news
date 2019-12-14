// @flow

import React from "react";
import { fetchMainPosts } from "../api/api";

function usePosts(type: string) {
    const [posts, setPosts] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetchMainPosts(type)
            .then(posts => setPosts(posts))
            .catch(error => {
                setError(error);
                console.error(error);
            });
        return () => setPosts(null);
    }, [type]);

    return [posts, error];
}

export default usePosts;
