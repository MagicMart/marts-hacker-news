import React from "react";
import {
    fetchMainPosts,
    fetchUser,
    fetchPosts,
    fetchItem,
    fetchComments,
} from "./api/api";

export function useFetchMainPosts(type) {
    console.log("useFetchMainPosts");
    const [posts, setPosts] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetchMainPosts(type)
            .then(posts => setPosts(posts))
            .catch(error => {
                setError(error);
                console.error(error);
            });
        return () => setPosts(null);
    }, [type]);

    return [posts, error];
}

export function useFetchUser(user) {
    console.log("useFetchUser");
    const [userInfo, setUserInfo] = React.useState(null);

    React.useEffect(() => {
        fetchUser(user).then(data => setUserInfo(data));
        return () => setUserInfo(null);
    }, [user]);

    return userInfo;
}

export function useFetchPosts(ids) {
    console.log("useFetchPosts");
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        fetchPosts(ids).then(data => setPosts(data));
        return () => setPosts(null);
    }, [ids]);
    return posts;
}

export function useFetchComments(ids) {
    console.log("useFetchComments");
    const [comments, setComments] = React.useState(null);

    React.useEffect(() => {
        fetchComments(ids).then(data => setComments(data));
        return () => setComments(null);
    }, [ids]);
    return comments;
}

export function useFetchItem(location) {
    console.log("useFetchItem");
    const [item, setItem] = React.useState(null);

    React.useEffect(() => {
        fetchItem(location).then(data => setItem(data));
        return () => setItem(null);
    }, [location]);
    return item;
}
