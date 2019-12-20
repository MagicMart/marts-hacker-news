import React from "react";
import { useLocation } from "react-router-dom";
import { useFetchUser } from "../customHooks.js";

function User(props) {
    const location = useLocation();
    const userInfo = useFetchUser(location);

    return <div>{JSON.stringify(userInfo)}</div>;
}

export default User;
