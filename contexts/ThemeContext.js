import React, { createContext, useEffect, useState } from "react";
import {useColorScheme} from "react-native";

export const ThemeContext = createContext("light");

//ThemeContext.Provider;
//    va diffuser la data du context dans les composants enfant de celui-ci

//ThemeContext.Consumer;
//    va récuperer la data envoyé par le premier Provider ascendant trouvé

export default function ThemeProvider({ children }) {
  const initialTheme = useColorScheme();
  const [theme, setTheme] = useState({ mode: initialTheme });

  const toggleTheme = () =>
    setTheme({ ...theme, mode: theme.mode === "light" ? "dark" : "light" });

  return (
    <ThemeContext.Provider value={{ theme: theme.mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
