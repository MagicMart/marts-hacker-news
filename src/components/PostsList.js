// @flow

import React from "react";
import { Link } from "react-router-dom";
import { formatTime } from "../helpers";
import { Theme } from "../contexts/theme";

type Props = {
    posts: Object,
};

function PostsList({ posts }: Props) {
    const { theme } = React.useContext(Theme);
    return (
        <ul>
            {posts.map(({ url, title, by, time, descendants, id }) => (
                <li key={id}>
                    {url ? (
                        <a className={`title-${theme}`} href={url}>
                            {title}
                        </a>
                    ) : (
                        <Link
                            className={`title-${theme}`}
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
