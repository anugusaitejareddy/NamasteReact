import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test.skip("Header component to render a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Log In" });

  expect(loginButton).toBeInTheDocument();
});

test.skip("Header component should render Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText("Cart - 0");

  expect(cart).toBeInTheDocument();
});

test.skip("Clicking log in button should change it log out", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInBtn = screen.getByRole("button", { name: "Log In" });

  fireEvent.click(logInBtn);

  const logOutBtn = screen.getByRole("button", { name: "Log Out" });

  expect(logOutBtn).toBeInTheDocument();
});
