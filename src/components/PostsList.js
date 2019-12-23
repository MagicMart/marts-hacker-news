// @flow

import React from "react";
import { Link } from "react-router-dom";

type Props = {
    posts: Object,
};

function PostsList({ posts }: Props) {
    return (
        <ul>
            {posts.map(({ url, title, by, time, descendants, id }) => (
                <li key={id}>
                    {url ? (
                        <a href={url}>
                            <p>{title}</p>
                        </a>
                    ) : (
                        <Link
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
                            to={{
                                pathname: "/user",
                                search: `id=${by}`,
                            }}
                        >
                            {by}
                        </Link>{" "}
                        on {time}, with{" "}
                        <Link
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
