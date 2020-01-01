// @flow

import React from "react";

export const Theme = React.createContext<Object>();

type Props = {
    children: Object,
};

function ThemeProvider({ children }: Props) {
    const [theme, toggleTheme] = React.useState("light");
    return (
        <Theme.Provider value={{ theme, toggleTheme }}>
            {children}
        </Theme.Provider>
    );
}

export default ThemeProvider;
