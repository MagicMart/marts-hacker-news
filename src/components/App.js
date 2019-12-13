// @flow

import React from "react";
import { fetchMainPosts } from "../api/api";

function App() {
    const [posts, setPosts] = React.useState(null);
    const [story, setStory] = React.useState("top");
    React.useEffect(() => {
        fetchMainPosts(story).then(posts => setPosts(posts));
    }, [story]);
    return (
        <div>
            <h1>Hacker News Clone</h1>
            {posts && <p>{JSON.stringify(posts)}</p>}
        </div>
    );
}

export default App;
