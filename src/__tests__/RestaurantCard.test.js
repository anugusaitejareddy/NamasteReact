import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import { withPromotedLabel } from "../components/RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render a restaurant card should be rendered with given props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const resName = screen.getByText("Pizza Hut");
  expect(resName).toBeInTheDocument();
});

test("should render a restaurant card with promoted label", () => {
  const PromotedResCard = withPromotedLabel(RestaurantCard);
  render(<PromotedResCard resData={MOCK_DATA} />);
  const promotedLabel = screen.getByText("Promoted");
  expect(promotedLabel).toBeInTheDocument();
});
