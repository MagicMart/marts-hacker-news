import React from "react";
import { useLocation } from "react-router-dom";
import { useFetchItem, useFetchComments } from "../customHooks.js";

function Comments(props) {
    const comments = useFetchComments(props.ids);
    return <div>{JSON.stringify(comments)}</div>;
}

function PostWithComments(props) {
    const location = useLocation().search.split("=")[1];
    const data = useFetchItem(location);

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
    if (!data) {
        return <div>Loading</div>;
    }
    const { id, by, time, text, kids, url, title, descendants } = data;
    return (
        <div>
            <h1>{title}</h1>
            <p>
                by {by} on {time} with {descendants} comments
            </p>
            <Comments ids={kids} />
        </div>
    );
}

export default PostWithComments;
