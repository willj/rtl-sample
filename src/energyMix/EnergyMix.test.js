import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
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

    it('changes the results when region is changed', async () => {
        const { getByLabelText, findByTitle } = render(<EnergyMix />);

        const regionPicker = getByLabelText('Select region', { selector: 'select'});
        
        expect(regionPicker.value).toBe('UK');
        expect(await findByTitle('UK Electricity Generation Sources')).toBeInTheDocument();

        fireEvent.change(regionPicker, { target: { value: 'Scotland' } });

        expect(regionPicker.value).toBe('Scotland');
        expect(await findByTitle('Scotland Electricity Generation Sources')).not.toBeNull();

        await wait();
    });

});
