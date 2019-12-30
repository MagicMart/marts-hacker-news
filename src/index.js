import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ThemeProvider from "./contexts/theme";

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById("app")
);
