// @flow

import React from "react";
import { useLocation, Link } from "react-router-dom";
import { fetchItem, fetchComments } from "../api/api";
import Loading from "./Loading";
import { formatTime } from "../helpers";

function Comments(props) {
    const [comments, setComments] = React.useState(null);

    React.useEffect(() => {
        let mounted = true;
        fetchComments(props.ids).then(data => mounted && setComments(data));
        return () => {
            mounted = false;
        };
    }, [props.ids]);

    if (!comments) {
        return <Loading text={"Loading comments"} />;
    }

    return (
        <ul>
            {comments.map(comment => {
                const { by, time, id, text } = comment;
                const createMarkup = () => ({ __html: text });
                return (
                    <li key={id}>
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
                            on {formatTime(time)}
                        </p>
                        <div dangerouslySetInnerHTML={createMarkup()} />
                    </li>
                );
            })}
        </ul>
    );
}

function PostWithComments(props: Object) {
    const location = useLocation().search.split("=")[1];
    const [item, setItem] = React.useState(null);

    React.useEffect(() => {
        let mounted = true;
        fetchItem(location).then(data => mounted && setItem(data));
        return () => {
            mounted = false;
        };
    }, [location]);

    // **id** | The item's unique id.
    // deleted | `true` if the item is deleted.
    // type | The type of item. One of "job", "story", "comment", "poll", or "pollopt".
    // by | The username of the item's author.
    // time | Creation date of the item, in [Unix Time](http://en.wikipedia.org/wiki/Unix_time).
    // text | The comment, story or poll text. HTML.
    // parent | The comment's parent: either another comment or the relevant story.
    // poll | The pollopt's associated poll.
    // kids | The ids of the item's comments, in ranked display order.
    // url | The URL of the story.
    // score | The story's score, or the votes for a pollopt.
    // title | The title of the story, poll or job. HTML.
    // parts | A list of related pollopts, in display order.
    // descendants | In the case of stories or polls, the total comment count.
    if (!item) {
        return <Loading />;
    }

    const { by, time, text, kids, title, descendants, url } = item;
    const createMarkup = () => ({ __html: text });
    return (
        <div>
            <h2>
                <a className="title" href={url}>
                    {title}
                </a>
            </h2>
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
                on {formatTime(time)} with {descendants} comments
            </p>
            <div dangerouslySetInnerHTML={createMarkup()} />
            {kids && <Comments ids={kids} />}
        </div>
    );
}

export default PostWithComments;
