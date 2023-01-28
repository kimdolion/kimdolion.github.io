import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { randomFacts } from "./constants"

export const getRandomFact = () => {
    let index = Math.round(Math.random()* (randomFacts.length - 0) + 0)
    console.log("getrandom index? ", index)
    console.log(randomFacts[0])
    return (randomFacts[index])
}


// Light/Dark Mode https://github.com/nas5w/usecontext-theme-toggling
type Theme = "light" | "dark";
type ThemeContext = { theme: Theme, handleTheme: ()=> void}

export const ThemeContext = createContext<ThemeContext>(
    {} as ThemeContext
);

export const ThemeProvider = (props: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  
  
  // get the defined mode from the browser
  useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "dark" : "light");
  }, []);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
 };

 export const useTheme = () => useContext(ThemeContext)