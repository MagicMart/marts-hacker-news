// @flow

import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Posts from "./Posts";
import User from "./User";
import Comments from "./Comments";

function App() {
    return (
        <Router>
            <div>
                <h1>Hacker News Clone</h1>
                <ul>
                    <li>
                        <Link to="/">Top</Link>
                    </li>
                    <li>
                        <Link to="/new">New</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Posts type="top" />
                    </Route>
                    <Route exact path="/new">
                        <Posts type="new" />
                    </Route>
                    <Route exact path="/user">
                        <User />
                    </Route>
                    <Route exact path="/posts">
                        <Comments />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
