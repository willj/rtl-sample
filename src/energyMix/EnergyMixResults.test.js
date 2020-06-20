import React from 'react';
import EnergyMixResults from './EnergyMixResults';
import { render, waitFor } from '@testing-library/react';
import mockApi from './MockEnergyMixApi';

beforeAll(() => mockApi.listen());
afterAll(() => mockApi.close());
afterEach(() => mockApi.resetHandlers());

describe('<EnergyMixResults />', () => {

    it('displays a loading indicator until results are loaded', async () => {
        const { getByTitle, getByText, queryByText } = render(<EnergyMixResults region="UK" />);

        expect(getByText('Loading Results...')).toBeInTheDocument();

        await waitFor(() => getByTitle('UK Electricity Generation Sources'));

        expect(queryByText('Loading Results...')).toBeNull();
    });

    it('loads and displays results for the UK when region set to UK', async () => {

        const { getByTitle } = render(<EnergyMixResults region="UK" />);

        const dataTable = await waitFor(() => getByTitle('UK Electricity Generation Sources'));

        expect(dataTable).toHaveTextContent('wind');
        expect(dataTable).toHaveTextContent('6.8%');
        expect(dataTable).toHaveTextContent('solar');
        expect(dataTable).toHaveTextContent('18.1%');
    });

    it('displays results for England when region is set to England', async () => {
        const { getByTitle } = render(<EnergyMixResults region="England" />);

        const dataTable = await waitFor(() => getByTitle('England Electricity Generation Sources'));

        expect(dataTable).toHaveTextContent('biomass');
        expect(dataTable).toHaveTextContent('5.5%');
        expect(dataTable).toHaveTextContent('coal');
        expect(dataTable).toHaveTextContent('0%');
    });

    it('displays results for Scotland when region is set to Scotland', async () => {
        const { getByTitle } = render(<EnergyMixResults region="Scotland" />);

        const dataTable = await waitFor(() => getByTitle('Scotland Electricity Generation Sources'));

        expect(dataTable).toHaveTextContent('hydro');
        expect(dataTable).toHaveTextContent('3.2%');
        expect(dataTable).toHaveTextContent('solar');
        expect(dataTable).toHaveTextContent('4.4%');
    });

});