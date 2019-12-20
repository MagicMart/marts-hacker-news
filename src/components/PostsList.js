import React from "react";
import { Link } from "react-router-dom";

function PostsList({ posts }) {
    return (
        <ul>
            {posts.map(({ url, title, by, time, descendants }) => (
                <li key={title + by}>
                    <a href={url}>
                        <p>{title}</p>
                    </a>
                    <p>
                        by{" "}
                        <Link
                            to={{
                                pathname: "/user",
                                search: `id=${by}`,
                            }}
                        >
                            {by}
                        </Link>{" "}
                        on {time}, with {descendants} comments
                    </p>
                </li>
            ))}
        </ul>
    );
}

export default PostsList;
