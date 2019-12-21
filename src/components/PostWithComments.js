import React from "react";
import { useLocation } from "react-router-dom";
import { useFetchItem, useFetchComments } from "../customHooks.js";

function PostWithComments(props) {
    const location = useLocation().search.split("=")[1];
    const comments = useFetchItem(location);
    return <div>{JSON.stringify(comments)}</div>;
}

export default PostWithComments;
