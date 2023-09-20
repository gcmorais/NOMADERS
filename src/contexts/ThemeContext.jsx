import React, { createContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import useLocalState from "../hooks/localState";

export const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalState("theme", "light");

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        break;
      case "light":
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  const theming = useMemo(
    () => ({ theme, handleToggleTheme }),
    [theme, handleToggleTheme],
  );

  return (
    <ThemeContext.Provider value={theming}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
