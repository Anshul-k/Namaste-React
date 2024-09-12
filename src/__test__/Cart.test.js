import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load the Restaurant Menu Items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianItems = screen.getAllByTestId("foodCategory");
  expect(accordianItems.length).toBe(15);

  fireEvent.click(accordianItems[2]);

  const foodItems = screen.getAllByTestId("foodItemName");
  expect(foodItems.length).toBe(21);
});

it("Should add the items to header cart on click", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianItems = screen.getAllByTestId("foodCategory");
  fireEvent.click(accordianItems[2]);
  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[1]);
  fireEvent.click(addBtns[4]);

  const cart = screen.getByRole("link", { name: "(2)", href: "/Cart" });
  expect(cart).toBeInTheDocument();
});

it("Should add the items to the cart page on click", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianItems = screen.getAllByTestId("foodCategory");
  fireEvent.click(accordianItems[2]);
  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[1]);
  fireEvent.click(addBtns[4]);

  const cartItems = screen.getAllByTestId("cartItem");
  expect(cartItems.length).toBe(4);
});

it("Should clear the items of the cart on clear button click", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const clearButton = screen.getByText("Clear");
  fireEvent.click(clearButton);

  expect(
    screen.getByText("The cart is empty, please select an item first...")
  ).toBeInTheDocument();
});
