// @flow

import React from "react";
import usePosts from "../customHooks/usePosts";

function New() {
    const posts = usePosts("new");

    return posts ? <p>{JSON.stringify(posts)}</p> : null;
}

export default New;
