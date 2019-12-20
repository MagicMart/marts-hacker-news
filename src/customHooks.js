import React from "react";
import { fetchMainPosts, fetchUser } from "./api/api";

export function useFetchMainPosts(type) {
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

export function useFetchUser(location) {
    const [userInfo, setUserInfo] = React.useState(null);

    React.useEffect(() => {
        const user = location.search.split("=")[1];
        fetchUser(user).then(data => setUserInfo(data));
        return () => setUserInfo(null);
    }, [location]);

    return userInfo;
}
