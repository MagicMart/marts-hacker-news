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

const Container = styled.div`
    max-width: 1026px;
    margin: 0 auto;
    padding-left: 5px;
    padding-right: 5px;
    .user-link,
    .comments-link {
        color: ${({ theme }) => (theme === "light" ? "black" : "yellow")};
        font-weight: 600;
    }
    .article-link {
        color: ${({ theme }) => (theme === "light" ? "#880303" : "yellow")};
        font-weight: 600;
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
`;

const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => (theme === "light" ? "black" : "white")};
    text-decoration: none;
    &.active {
        color: ${({ theme }) => (theme === "light" ? "red" : "#ff9800")};
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
                                <StyledNavLink theme={theme} exact to="/">
                                    Top
                                </StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink theme={theme} to="/new">
                                    New
                                </StyledNavLink>
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
                        <Route path="/new">
                            <PostsType type="new" />
                        </Route>
                        <Route path="/user">
                            <User />
                        </Route>
                        <Route path="/posts">
                            <PostWithComments />
                        </Route>
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}

export default App;
