import React from "react";
import { useLocation } from "react-router-dom";
import { useFetchUser } from "../customHooks.js";

function User(props) {
    const location = useLocation();
    const userInfo = useFetchUser(location);

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
        </div>
    );
}

export default User;
