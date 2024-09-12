const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render the Login button", () => {
  //   Rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   Quering
  const loginButton = screen.getByRole("button", { name: "Login" });

  //   Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render the Cart", () => {
  //   Rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   Quering
  const cart = screen.getByRole("link", { name: "", href: "/Cart" });

  //   Assertion
  expect(cart).toBeInTheDocument();
});

it("Should change Login button to logout on click", () => {
  //   Rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   Quering
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  //   Assertion
  expect(logoutButton).toBeInTheDocument();
});
