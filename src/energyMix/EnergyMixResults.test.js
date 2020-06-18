import React from 'react';
import EnergyMixResults from './EnergyMixResults';
import { render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockApi = setupServer(
    rest.get('https://api.carbonintensity.org.uk/generation', (req, res, ctx) => {
        return res(ctx.json(
            {
                data:{
                    from: "2018-01-20T12:00Z",
                    to: "2018-01-20T12:30Z",
                    generationmix: [
                        { fuel: "wind", perc: 6.8 },
                        { fuel: "solar", perc: 18.1}
                    ]
                }
            })
        );
    })
);

beforeAll(() => mockApi.listen());
afterAll(() => mockApi.close());
afterEach(() => mockApi.resetHandlers());

describe('<EnergyMixResults />', () => {

    it('displays a loading indicator, followed then loads and displays results', async () => {

        const { getByTitle, getByText, queryByText } = render(<EnergyMixResults />);

        expect(getByText('Loading Results...')).toBeInTheDocument();

        const dataTable = await waitFor(() => getByTitle('UK Electricity Generation Sources'));

        expect(queryByText('Loading Results...')).toBeNull();
        expect(dataTable).toHaveTextContent('wind');
        expect(dataTable).toHaveTextContent('6.8%');
        expect(dataTable).toHaveTextContent('solar');
        expect(dataTable).toHaveTextContent('18.1%');

    });

});