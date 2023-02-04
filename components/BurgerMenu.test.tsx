/**
 * @jest-environment jsdom
*/
import { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BurgerMenu } from './BurgerMenu';

describe('BurgerMenu', () => {
    test('opens on click', () => {
        const Wrapper = () => {
            const [open, setOpen ]= useState(false);
            return <BurgerMenu open={open} setOpen={setOpen} />
        }
        const { getByRole } = render(<Wrapper />)
        const result = getByRole('button')
        fireEvent.click(result)

        expect(result).toHaveAttribute('aria-expanded', "true")
    })
})