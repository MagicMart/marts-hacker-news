// @flow

import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { fetchItem, fetchComments } from "../api/api";
import Loading from "./Loading";
import { formatTime } from "../helpers";
import { Theme } from "../contexts/theme";

const StyledListItem = styled.li`
    background: ${({ theme }) =>
        theme === "light"
            ? "rgba(128, 128, 128, 0.1411764705882353)"
            : "#3a5461"};
    padding: 5px;
    margin: 10px;
`;

function Comments(props) {
    const [comments, setComments] = React.useState(null);
    const { theme } = props;

    React.useEffect(() => {
        let mounted = true;
        fetchComments(props.ids).then(data => mounted && setComments(data));
        return () => {
            mounted = false;
        };
    }, [props.ids]);

    if (!comments) {
        return <Loading text={"Loading comments"} />;
    }

    return (
        <ul>
            {comments.map(comment => {
                const { by, time, id, text } = comment;
                const createMarkup = () => ({ __html: text });
                return (
                    <StyledListItem theme={theme} key={id}>
                        <p>
                            by{" "}
                            <Link
                                to={{
                                    pathname: "/user",
                                    search: `id=${by}`,
                                }}
                            >
                                {by}
                            </Link>{" "}
                            on {formatTime(time)}
                        </p>
                        <div dangerouslySetInnerHTML={createMarkup()} />
                    </StyledListItem>
                );
            })}
        </ul>
    );
}

function PostWithComments(props: Object) {
    const { theme } = React.useContext(Theme);
    const location = useLocation().search.split("=")[1];
    const [item, setItem] = React.useState(null);

    React.useEffect(() => {
        let mounted = true;
        fetchItem(location).then(data => mounted && setItem(data));
        return () => {
            mounted = false;
        };
    }, [location]);

    if (!item) {
        return <Loading />;
    }

    const { by, time, text, kids, title, descendants, url } = item;
    const createMarkup = () => ({ __html: text });
    return (
        <div>
            <h2>
                <a className="title" href={url}>
                    {title}
                </a>
            </h2>
            <p>
                by{" "}
                <Link
                    className="user-link"
                    to={{
                        pathname: "/user",
                        search: `id=${by}`,
                    }}
                >
                    {by}
                </Link>{" "}
                on {formatTime(time)} with {descendants} comments
            </p>
            <div dangerouslySetInnerHTML={createMarkup()} />
            {kids && <Comments ids={kids} theme={theme} />}
        </div>
    );
}

export default PostWithComments;
