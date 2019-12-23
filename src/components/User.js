import React from "react";
import { useLocation } from "react-router-dom";
import { fetchUser, fetchPosts } from "../api/api";
import PostsList from "./PostsList";

function UserPosts(props) {
    console.log("render user posts");
    const [posts, setPosts] = React.useState(null);
    React.useEffect(() => {
        fetchPosts(props.ids.slice(0, 50)).then(data => setPosts(data));
    }, [props.ids]);
    if (!posts) {
        return <div>Loading</div>;
    }
    console.log(posts);
    return <PostsList posts={posts} />;
}

function User(props) {
    const user = useLocation().search.split("=")[1];
    const [userInfo, setUserInfo] = React.useState(null);

    React.useEffect(() => {
        fetchUser(user).then(data => setUserInfo(data));
    }, [user]);

    if (!userInfo) {
        return <div>Loading</div>;
    }

    // created - Creation date of the user, in Unix Time.
    // id - The user's unique username. Case-sensitive. Required.
    // karma - The user's karma.
    // submitted - List of the user's stories, polls and comments.
    // about - The user's optional self-description. HTML.

    const { created, id, karma, submitted } = userInfo;

    return (
        <div>
            <h1>{id}</h1>
            <p>
                joined {created} has {karma} karma
            </p>
            {submitted && <UserPosts ids={submitted} />}
        </div>
    );
}

export default React.memo(User, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});
