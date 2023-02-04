/**
 * @jest-environment jsdom
 */
import { ThemeProvider, MobileProvider, MobileContext, useMobile, ThemeContext } from './utils';
import { describe, test } from '@jest/globals';
import { render, renderHook } from '@testing-library/react';
import { Header } from './components/Header';

jest.mock('next/router', () => ({
    useRouter() {
      return {
        pathname: '',
      };
    },
  }));

describe('utils', () => {

    
    test('ThemeProvider renders', () => {
      Object.defineProperty(window, "matchMedia", {
          value: jest.fn((query) => {
            return {
              matches: true,
              media: query,
              addListener: jest.fn(),
              removeListener: jest.fn()
            };
          })
        });
      render(<ThemeProvider><Header /></ThemeProvider>)
    }), 

    test('ThemeProvider renders in dark mode by default', () => {
      const { getByTestId } = render(<ThemeContext.Provider value={{isDarkMode: true, handleTheme: jest.fn(), theme: 'Dark'}}><Header /></ThemeContext.Provider>)
      expect(getByTestId("themeButton")).toHaveProperty('title', 'Currently: Dark theme. Click to switch to Light theme.')
    }), 

    test('ThemeProvider can be set to Light mode', () => {
        const { getByTestId } = render(<ThemeContext.Provider value={{isDarkMode: false, handleTheme: jest.fn(), theme: 'Light'}}><Header /></ThemeContext.Provider>)
        expect(getByTestId("themeButton")).toHaveProperty('title', 'Currently: Light theme. Click to switch to Dark theme.')
    }), 

    test('MobileProvider renders when screen size is less than 500', () => {
      const expectedText = "Click for navigation links."

      const { getByTitle } = render(
      <MobileContext.Provider value={{isMobile: true}}>
        <Header />
      </MobileContext.Provider>)

      expect( getByTitle(expectedText)).toHaveProperty('title', expectedText)
    })
})