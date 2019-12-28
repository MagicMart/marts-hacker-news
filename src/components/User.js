// @flow

import React from "react";
import { useLocation } from "react-router-dom";
import { fetchUser, fetchPosts } from "../api/api";
import PostsList from "./PostsList";
import Loading from "./Loading";
import { formatTime } from "../helpers";

function UserPosts(props) {
    console.log("render user posts");
    const [posts, setPosts] = React.useState(null);
    React.useEffect(() => {
        let mounted = true;
        fetchPosts(props.ids.slice(0, 50)).then(
            data => mounted && setPosts(data)
        );
        return () => {
            mounted = false;
            setPosts(null);
        };
    }, [props.ids]);
    if (!posts) {
        return <Loading text={"Loading user posts"} />;
    }
    if (posts.length === 0) {
        return <p>This user hasn't posted yet</p>;
    }
    console.log(posts);
    return <PostsList posts={posts} />;
}

function User() {
    const user = useLocation().search.split("=")[1];
    const [userInfo, setUserInfo] = React.useState(null);

    React.useEffect(() => {
        let mounted = true;
        fetchUser(user).then(data => mounted && setUserInfo(data));
        return () => {
            mounted = false;
            setUserInfo(null);
        };
    }, [user]);

    if (!userInfo) {
        return <Loading text={"Loading user"} />;
    }

    // created - Creation date of the user, in Unix Time.
    // id - The user's unique username. Case-sensitive. Required.
    // karma - The user's karma.
    // submitted - List of the user's stories, polls and comments.
    // about - The user's optional self-description. HTML.

    const { created, id, karma, submitted } = userInfo;

    return (
        <div>
            <h2>{id}</h2>
            <p>
                joined {formatTime(created)} has {karma} karma
            </p>
            {submitted && <UserPosts ids={submitted} />}
        </div>
    );
}

export default User;
