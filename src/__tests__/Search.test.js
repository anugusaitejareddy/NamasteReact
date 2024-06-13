import { render, act } from "@testing-library/react";
import Body from "../components/Body/Body";
import MOCK_DATA from "../__tests__/mocks/restaurantListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(MOCK_DATA);
    },
  });
});

test("Body component should render restaurant cards", () => {
  act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
});
