const { render, screen } = require("@testing-library/react");
const { default: Contact } = require("../components/Contact");
import "@testing-library/jest-dom";

// Describe is used to group a number of test cases for better readability.
// You can use Describe nested in another describe.
describe("Contact us Page Test Cases", () => {
  // it/test, both can be used. test and it both are alias
  it("Should load the heading in the component", () => {
    // Rendering
    render(<Contact />);

    // Quering
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load the Button in the component", () => {
    // Rendering
    render(<Contact />);

    // Quering
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load the input with Name in the component", () => {
    // Rendering
    render(<Contact />);

    // Quering
    const input = screen.getByPlaceholderText("Name");

    // Assertion
    expect(input).toBeInTheDocument();
  });

  test("Should load all the input boxes in the component", () => {
    // Rendering
    render(<Contact />);

    // Quering
    const input = screen.getAllByRole("textbox");

    // Assertion
    expect(input.length).toBe(2);
  });
});
