import React from "react";
import { fetchMainPosts } from "../api/api";

function Top() {
    const [posts, setPosts] = React.useState(null);
    const story = "top";

    React.useEffect(() => {
        fetchMainPosts(story).then(posts => setPosts(posts));
    }, []);
    return posts ? <p>{JSON.stringify(posts)}</p> : null;
}

export default Top;
