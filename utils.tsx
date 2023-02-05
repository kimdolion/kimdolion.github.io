import { createContext, ReactNode, useContext, useEffect, useState, RefObject } from "react"
import { RANDOM_FACTS } from "./constants"

export const getRandomFact = () => {
    let index = Math.round(Math.random()* (RANDOM_FACTS.length - 0) + 0)
    return (RANDOM_FACTS[index])
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
type Theme = "Light" | "Dark";
type ThemeContext = { theme: Theme, isDarkMode: boolean, handleTheme: ()=> void}

export const ThemeContext = createContext<ThemeContext>(
    {} as ThemeContext
);

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * 
 * @param children a ReactNode
 * @returns Color Theme Provider that will set the color scheme to Light or Dark
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("Dark");
  const isDarkMode = theme === 'Dark'
  
  // get the defined mode from the browser
  useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "Dark" : "Light");
  }, []);
  
  const handleTheme = () => {
    setTheme(isDarkMode ? 'Light' : 'Dark' )
  }
  
  const value = { theme, isDarkMode, handleTheme}
  return (
    <ThemeContext.Provider value={value}>
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
        width <= 766 ? setIsMobile(true) : setIsMobile(false)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
}, [width])

  const value = { isMobile }
  return (
    <MobileContext.Provider value={value}>
      {children}
    </MobileContext.Provider>
  );
 };

 export const useMobile = () => useContext(MobileContext)