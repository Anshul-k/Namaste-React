const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";

it("Should render the RestaurantCard components with props", () => {
  //   Rendering
  render(<RestaurantCard resData={MOCK_DATA} />);

  //   Quering
  const name = screen.getByText("Chinese Wok");

  //   Assertion
  expect(name).toBeInTheDocument();
});
