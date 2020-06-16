import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EnergyMix from './EnergyMix';

describe('<EnergyMix />', () => {

    it('renders a region picker', () => {
        const { getByLabelText } = render(<EnergyMix />);

        expect(getByLabelText('Select region', { selector: 'select' })).toBeInTheDocument();
    });

    it('allows the region to be changed', () => {
        const { getByLabelText } = render(<EnergyMix />);

        const regionPicker = getByLabelText('Select region', { selector: 'select' });

        expect(regionPicker.value).toBe('UK');
        fireEvent.change(regionPicker, { target: { value: 'Scotland' } });
        expect(regionPicker.value).toBe('Scotland');
    });

});
