import { sum } from "../components/sum";

test("Test for sum calculation", () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
