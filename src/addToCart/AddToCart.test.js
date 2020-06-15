import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddToCart from './AddToCart';

describe('<AddToCart />', () => {
    
    it('should display an add to cart button', () => {
        const { getByText } = render(<AddToCart />);

        expect(getByText('Add to cart', { selector: 'button' })).toBeInTheDocument();
    });

    it('should display a size picker with small/medium/large options', () => {
        const { getByLabelText, getByText } = render(<AddToCart />);

        const sizeSelect = getByLabelText('Size', { selector: 'select'});

        expect(sizeSelect).toBeInTheDocument();

        expect(getByText('Small', { container: sizeSelect })).toBeInTheDocument();
        expect(getByText('Medium', { container: sizeSelect })).toBeInTheDocument();
        expect(getByText('Large', { container: sizeSelect })).toBeInTheDocument();
    });

    it('should change the selected size when a size is selected', () => {
        const { getByLabelText } = render(<AddToCart />);

        const sizeSelect = getByLabelText('Size', { selector: 'select'});

        expect(sizeSelect.value).toBe('');
        fireEvent.change(sizeSelect, { target: { value: 'Large' }});

        expect(sizeSelect.value).toBe('Large');
    });

    it('should display color picker options for red, yellow, blue, green', () => {
        const { getByLabelText } = render(<AddToCart />);

        expect(getByLabelText('Yellow', { selector: 'input[type=radio]'})).toBeInTheDocument();
        expect(getByLabelText('Blue', { selector: 'input[type=radio]'})).toBeInTheDocument();
        expect(getByLabelText('Green', { selector: 'input[type=radio]'})).toBeInTheDocument();
    });

    it('should show a color as selected when clicked', () => {
        const { getByLabelText } = render(<AddToCart />);

        const redSwatch = getByLabelText('Red', { selector: 'input[type=radio]'});

        expect(redSwatch).toBeInTheDocument();
        expect(redSwatch).not.toBeChecked();

        fireEvent.click(redSwatch);

        expect(redSwatch).toBeChecked();
    });

    it('should call addToCart with variant options when the Add To Cart button is clicked', () => {

        const addToCartMock = jest.fn();
        const { getByText, getByLabelText } = render(<AddToCart onAddToCart={addToCartMock} />);

        // choose a size and color
        fireEvent.change(getByLabelText('Size', { selector: 'select'}), { target: { value: 'Large' }});
        fireEvent.click(getByLabelText('Green', { selector: 'input[type=radio]'}));

        fireEvent.click(getByText('Add to cart', { selector: 'button' }));

        expect(addToCartMock).toHaveBeenCalledTimes(1);
        expect(addToCartMock).toHaveBeenCalledWith({size: 'Large', color: 'green'});
    });



});