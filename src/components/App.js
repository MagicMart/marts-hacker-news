// @flow

import React from "react";

import Posts from "./Posts";

function App() {
    return (
        <div>
            <h1>Hacker News Clone</h1>
            <Posts type="top" />
        </div>
    );
}

export default App;
