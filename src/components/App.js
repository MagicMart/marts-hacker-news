// @flow

import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import PostsType from "./PostsType";
import User from "./User";
import PostWithComments from "./PostWithComments";

function App() {
    return (
        <Router>
            <div>
                <h1>Hacker News Clone</h1>
                <nav>
                    <ul className="row bold">
                        <li>
                            <Link to="/">Top</Link>
                        </li>
                        <li>
                            <Link to="/new">New</Link>
                        </li>
                    </ul>
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
