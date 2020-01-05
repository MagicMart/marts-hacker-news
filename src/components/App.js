// @flow

import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
} from "react-router-dom";
import styled from "styled-components";

import PostsType from "./PostsType";
import User from "./User";
import PostWithComments from "./PostWithComments";
import { FaMoon, FaSun } from "react-icons/fa";
import { Theme } from "../contexts/theme";

const activeStyle = {
    color: "red",
};

const Container = styled.div`
    max-width: 1026px;
    margin: 0 auto;
    padding-left: 5px;
    padding-right: 5px;
    a {
        color: ${({ theme }) => (theme === "light" ? "black" : "yellow")};
        font-weight: 600;
    }
    .title {
        color: ${({ theme }) => (theme === "light" ? "#880303" : "yellow")};
    }
    h1 {
        font-size: 1rem;
        background: ${({ theme }) => (theme === "light" ? "white" : "#413b3b")};
        margin: 0;
        padding: 5px;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 700;
    li {
        margin: 0 0.5em;
    }
    a {
        color: ${({ theme }) => (theme === "light" ? "black" : "white")};
        text-decoration: none;
    }
`;

function ThemeIcon(props) {
    if (props.theme === "light") {
        return <FaSun color={"#a1a12f"} {...props} />;
    } else {
        return <FaMoon color={"yellow"} {...props} />;
    }
}

function App() {
    const { theme, toggleTheme } = React.useContext(Theme);

    return (
        <Router>
            <div className={theme}>
                <Container theme={theme}>
                    <h1>
                        <i>from</i> Hacker News
                    </h1>
                    <StyledNav theme={theme}>
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
                        <ThemeIcon
                            theme={theme}
                            onClick={() => {
                                toggleTheme(state =>
                                    state === "light" ? "dark" : "light"
                                );
                            }}
                            size={"48px"}
                        />
                    </StyledNav>
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
                </Container>
            </div>
        </Router>
    );
}

export default App;
