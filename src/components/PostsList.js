// @flow

import React from "react";
import { Link } from "react-router-dom";
import { formatTime } from "../helpers";

type Props = {
    posts: Object,
};

function PostsList({ posts }: Props) {
    return (
        <ul>
            {posts.map(({ url, title, by, time, descendants, id }) => (
                <li key={id}>
                    {url ? (
                        <a className="title" href={url}>
                            {title}
                        </a>
                    ) : (
                        <Link
                            className="title"
                            to={{
                                pathname: "/posts",
                                search: `id=${id}`,
                            }}
                        >
                            {title}
                        </Link>
                    )}

                    <p>
                        by{" "}
                        <Link
                            className="user-link"
                            to={{
                                pathname: "/user",
                                search: `id=${by}`,
                            }}
                        >
                            {by}
                        </Link>{" "}
                        on {formatTime(time)}, with{" "}
                        <Link
                            className="user-link"
                            to={{
                                pathname: "/posts",
                                search: `id=${id}`,
                            }}
                        >
                            {descendants}
                        </Link>{" "}
                        comments
                    </p>
                </li>
            ))}
        </ul>
    );
}

export default PostsList;
