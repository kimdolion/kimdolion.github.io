/**
 * @jest-environment jsdom
 */
import { ThemeProvider, MobileContext, ThemeContext, getRandomFromArray } from './utils';
import { describe, test } from '@jest/globals';
import { render } from '@testing-library/react';

import { TEST_IDS } from '@/constants';
import { Header } from './components/Header';

jest.mock('next/router', () => ({
    useRouter() {
      return {
        pathname: '',
      };
    },
  }));

describe('utils', () => {
    test('renders ThemeProvider', () => {
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

    test('renders ThemeProvider in dark mode by default', () => {
      const { getByTestId } = render(<ThemeContext.Provider value={{isDarkMode: true, handleTheme: jest.fn(), theme: 'Dark'}}><Header /></ThemeContext.Provider>)
      expect(getByTestId(TEST_IDS.headerTestIds.themeButton)).toHaveProperty('title', 'Currently: Dark theme. Click to switch to Light theme.')
    })

    test('sets ThemeProvider to Light mode', () => {
        const { getByTestId } = render(<ThemeContext.Provider value={{isDarkMode: false, handleTheme: jest.fn(), theme: 'Light'}}><Header /></ThemeContext.Provider>)
        expect(getByTestId(TEST_IDS.headerTestIds.themeButton)).toHaveProperty('title', 'Currently: Light theme. Click to switch to Dark theme.')
    })

    test('renders MobileProvider when screen size is less than 500', () => {
      const expectedText = "Click for navigation links."

      const { getByTitle } = render(
      <MobileContext.Provider value={{isMobile: true}}>
        <Header />
      </MobileContext.Provider>)

      expect( getByTitle(expectedText)).toHaveProperty('title', expectedText)
    })

    test('picks a random number using getRandomFromArray', ()=> {
      const numberArray = [1,2,3,4,5]
      const numberResult = getRandomFromArray(numberArray);
      expect(numberArray).toContain(numberResult)
    })

    test('picks a random string using getRandomFromArray', ()=> {
      const stringArray = ["1", "2", "3", "4", "5"]
      const stringResult = getRandomFromArray(stringArray);
      expect(stringArray).toContain(stringResult)
    })

    test('picks a random object using getRandomFromArray', ()=> {
      const objectArray = [{string: "1"}, {string: "2"}, {string: "3"}, {string: "4"}, {string: "5"}]
      const objectResult = getRandomFromArray(objectArray);
      expect(objectArray).toContain(objectResult)
    })
})