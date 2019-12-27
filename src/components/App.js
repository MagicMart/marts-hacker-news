// @flow

import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
} from "react-router-dom";

import PostsType from "./PostsType";
import User from "./User";
import PostWithComments from "./PostWithComments";
import { FaMoon, FaSun } from "react-icons/fa";

const activeStyle = {
    color: "red",
};

function App() {
    return (
        <Router>
            <div className="container">
                <h1>From Hacker News</h1>
                <nav className="nav row">
                    <ul className="row">
                        <li>
                            <NavLink exact activeStyle={activeStyle} to="/">
                                Top
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={activeStyle} to="/new">
                                New
                            </NavLink>
                        </li>
                    </ul>
                    <FaSun color={"yellow"} size={"48px"} />
                </nav>
                <Switch>
                    <Route exact path="/">
                        <PostsType type="top" />
                    </Route>
                    <Route exact path="/new">
                        <PostsType type="new" />
                    </Route>
                    <Route exact path="/user">
                        <User />
                    </Route>
                    <Route exact path="/posts">
                        <PostWithComments />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
