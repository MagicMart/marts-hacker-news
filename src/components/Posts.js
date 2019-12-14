// @flow

import React from "react";
import { fetchMainPosts } from "../api/api";

type Props = {
    type: string,
};

function Posts({ type }: Props) {
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

    if (error !== null) {
        return <p>There was an error in fetching the posts</p>;
    }

    if (!posts) {
        return <p>Loading</p>;
    }

    return (
        <ul>
            {posts.map(({ url, title, by, time, descendants }) => (
                <li key={title + by}>
                    <a href={url}>
                        <p>{title}</p>
                        <p>
                            by {by} on {time}, with {descendants} comments
                        </p>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Posts;
