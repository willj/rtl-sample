import React from "react";
import SimpleSample from "./SimpleSample";
import { render, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

const mockApi = setupServer(
  rest.get(
    "https://programming-quotes-api.herokuapp.com/quotes/random",
    (req, res, ctx) => {
      return res(
        ctx.json({
          _id: "1",
          en: "Test Quote",
          author: "Me",
          id: "1"
        })
      );
    }
  )
);

beforeAll(() => mockApi.listen());
afterAll(() => mockApi.close());
afterEach(() => mockApi.resetHandlers());

it("displays a quote getBy", async () => {
  const { getByTestId } = render(<SimpleSample />);

  const wrapper = await waitFor(() => getByTestId("quote-wrapper"));
  expect(wrapper).toHaveTextContent("Test Quote");
});

it("displays a quote findBy", async () => {
  const { findByTestId } = render(<SimpleSample />);

  expect(await findByTestId("quote-wrapper")).toHaveTextContent("Test Quote");
});