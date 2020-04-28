// @flow

import React from "react";
import { useLocation } from "react-router-dom";
import { fetchUser, fetchPosts } from "../api/api";
import PostsList from "./PostsList";
import Loading from "./Loading";
import { formatTime } from "../helpers";

function UserPosts(props) {
    const [posts, setPosts] = React.useState(null);
    React.useEffect(() => {
        let mounted = true;
        fetchPosts(props.ids.slice(0, 50)).then(
            data => mounted && setPosts(data)
        );
        return () => {
            mounted = false;
        };
    }, [props.ids]);
    if (!posts) {
        return <Loading text={"User posts"} />;
    }
    if (posts.length === 0) {
        return <p>This user hasn't posted yet</p>;
    }
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
        };
    }, [user]);

    if (!userInfo) {
        return <Loading text={"User"} />;
    }

    // created - Creation date of the user, in Unix Time.
    // id - The user's unique username. Case-sensitive. Required.
    // karma - The user's karma.
    // submitted - List of the user's stories, polls and comments.
    // about - The user's optional self-description. HTML.

    const { created, id, karma, submitted, about } = userInfo;
    const createMarkup = () => ({ __html: about });

    return (
        <div>
            <h2>{id}</h2>
            <p>
                joined {formatTime(created)} has {karma} karma
            </p>
            <div dangerouslySetInnerHTML={createMarkup()} />
            <hr />
            {submitted && <UserPosts ids={submitted} />}
        </div>
    );
}

export default User;
