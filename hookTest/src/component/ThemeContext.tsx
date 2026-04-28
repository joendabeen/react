import { createContext } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// 초기화
// type만 맞춰준 것
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {
    console.log();
  },
});

export default ThemeContext;
