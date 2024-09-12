import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load the Searchbar in the page", async () => {
  //   Rendering
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //   Querying
  const searcBar = screen.getByTestId("searchBar");

  //   Assertion
  expect(searcBar).toBeInTheDocument();
});

it("Should filter the restaurant list", async () => {
  //   Rendering
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardBeforeFilter.length).toBe(8);

  const searcBar = screen.getByTestId("searchBar");
  fireEvent.change(searcBar, { target: { value: "b" } });

  // Wait for the filtering to apply after debounce
  await waitFor(
    () => {
      const cardAfterFilter = screen.getAllByTestId("resCard");
      expect(cardAfterFilter.length).toBe(4);
    },
    { timeout: 800 }
  ); // 400ms to account for debounce delay
});
