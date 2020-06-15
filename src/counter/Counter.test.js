import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('<Counter />', () => {

    it('renders a counter result as zero', () => {
        const { getByText } = render(<Counter />);

        expect(getByText('Count: 0')).toBeInTheDocument();
    });

    it('renders +/- buttons', () => {
        const { getByText } = render(<Counter />);

        expect(getByText('+', {selector: 'button'})).toBeInTheDocument();
        expect(getByText('-', {selector: 'button'})).toBeInTheDocument();
    });

    it('adds one to the count when the plus button is clicked', () => {
        const { getByText } = render(<Counter />);
        
        expect(getByText('Count: 0')).toBeInTheDocument();

        fireEvent.click(getByText('+', {selector: 'button'}));

        expect(getByText('Count: 1')).toBeInTheDocument();
    });

    it('subtracts one from the count when the minus button is clicked', () => {
        const { getByText } = render(<Counter />);
        
        expect(getByText('Count: 0')).toBeInTheDocument();

        fireEvent.click(getByText('-', {selector: 'button'}));

        expect(getByText('Count: -1')).toBeInTheDocument();
    });

});