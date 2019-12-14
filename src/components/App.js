// @flow

import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Posts from "./Posts";

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
                    <Route exact path="/" render={() => <Posts type="top" />} />
                    <Route path="/new" render={() => <Posts type="new" />} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
