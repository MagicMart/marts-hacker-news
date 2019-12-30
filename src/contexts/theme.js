import React from "react";

export const Theme = React.createContext();

function ThemeProvider({ children }) {
    const [theme, toggleTheme] = React.useState("light");
    return (
        <Theme.Provider value={{ theme, toggleTheme }}>
            {children}
        </Theme.Provider>
    );
}

export default ThemeProvider;
