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
    }),
    rest.get('https://api.carbonintensity.org.uk/regional/england', (req, res, ctx) => {
        return res(ctx.json({
            data: [
                {
                    regionid: 15,
                    dnoregion: "England",
                    shortname: "England",
                    data: [
                        {
                            from: "2020-06-20T15:00Z",
                            to: "2020-06-20T15:30Z",
                            intensit: {
                                forecast: 151,
                                index: "low"
                            },
                            generationmix: [
                                {
                                    fuel: "biomass",
                                    perc: 5.5
                                },
                                {
                                    fuel: "coal",
                                    perc: 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }));
    }),
    rest.get('https://api.carbonintensity.org.uk/regional/scotland', (req, res, ctx) => {
        return res(ctx.json({
            data: [
              {
                regionid: 16,
                dnoregion: "Scotland",
                shortname: "Scotland",
                data: [
                  {
                    from: "2020-06-20T15:00Z",
                    to: "2020-06-20T15:30Z",
                    intensity: {
                      forecast: 10,
                      index: "very low"
                    },
                    generationmix: [
                      {
                        fuel: "hydro",
                        perc: 3.2
                      },
                      {
                        fuel: "solar",
                        perc: 4.4
                      }
                    ]
                  }
                ]
              }
            ]
          }));
    }),
);

export default mockApi;

