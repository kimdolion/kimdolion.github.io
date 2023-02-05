/**
 * @jest-environment jsdom
*/
import { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { TableOfContents } from './TableOfContents';
import { MobileContext, MobileProvider } from '@/utils';
import { TEST_IDS } from '@/constants';

interface WrapperProps {
    depth?: number;
    isMobile: boolean;
}
const TableOfContentsWrapper = ({depth, isMobile}: WrapperProps) => {
    return (
        <MobileContext.Provider value={{isMobile: isMobile}}>
            <div>
                <TableOfContents headingDepth={depth} />
                <h2 id="test-heading-1">Test Heading h2</h2>
                <h3 id="test-heading-2">Test Heading h3</h3>
                <h4 id="test-heading-3">Test Heading h4</h4>
                <h5 id="test-heading-4">Test Heading h5</h5>
            </div>
        </MobileContext.Provider>
    )
}

describe('TableOfContents', () => {
    beforeEach(() => {
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
          observe: () => null,
          unobserve: () => null,
          disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    })

    test('renders a Table of Contents based on the headings given.', () => {
        const { getByTestId } = render(<TableOfContentsWrapper isMobile={false} />)
        const result = getByTestId(TEST_IDS.tocTestIds.tableOfContents)
        expect(result).toBeVisible()
    })
    // ,
    
    // test('renders a dropdown if the screen size is mobile', () => {
    //     const { getByTestId } = render(<TableOfContentsWrapper isMobile />)

    //     const result = getByTestId(TEST_IDS.tocTestIds.dropdown)
    //     expect(result).toBeVisible()
    // })

    // test('moves the page after clicking on a heading.', () => {

    //     const { getByRole } = render(<TableOfContentsWrapper />)
    //     const result = getByRole('button')
    //     fireEvent.click(result)

    //     expect(result).toHaveAttribute('aria-expanded', "true")
    // })
})