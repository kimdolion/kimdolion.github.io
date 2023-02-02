import { createContext, ReactNode, useContext, useEffect, useState, RefObject, Ref } from "react"
import { randomFacts } from "./constants"

export const getRandomFact = () => {
    let index = Math.round(Math.random()* (randomFacts.length - 0) + 0)
    return (randomFacts[index])
}


export const useOutsideClick  = (ref: RefObject<HTMLDivElement>, handler: (event: MouseEvent | TouchEvent) => void ) => {

  useEffect(() => {
      const listener = (event: MouseEvent | TouchEvent) => {
        if (!ref?.current || ref.current.contains(event.target as Node)) {
            return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener)
      return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener)
      };
  },[]);
};


// Light/Dark Mode https://github.com/nas5w/usecontext-theme-toggling
type Theme = "light" | "dark";
type ThemeContext = { theme: Theme, isDarkMode: boolean, handleTheme: ()=> void}

export const ThemeContext = createContext<ThemeContext>(
    {} as ThemeContext
);

interface ThemeProviderProps {
  children: ReactNode
}

/**
 * 
 * @param children a ReactNode
 * @returns Color Theme Provider that will set the color scheme to Light or Dark
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const isDarkMode = theme === 'dark'
  
  // get the defined mode from the browser
  useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "dark" : "light");
  }, []);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, handleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
 };

 export const useTheme = () => useContext(ThemeContext)


 
type Mobile = boolean;
type MobileContext = { isMobile: Mobile}

/**
 * 
 * @param children a ReactNode
 * @returns Screen Sizing Provider that will return whether the screen size is within a mobile view size of 768px or smaller
 */
export const MobileContext = createContext<MobileContext>(
    {} as MobileContext
);

interface MobileProviderProps {
  children: ReactNode
}

export const MobileProvider = ({ children }: MobileProviderProps) => {
  const [width, setWidth] = useState(1200)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth)
        width <= 768 ? setIsMobile(true) : setIsMobile(false)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
}, [width])

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
 };

 export const useMobile = () => useContext(MobileContext)