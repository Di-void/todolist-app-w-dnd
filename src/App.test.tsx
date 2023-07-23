import App from "./App";
import { render, screen } from "./utils/test-utils";

// SUITE
describe("Simple working test", () => {
  // TEST
  it("the title is visible", () => {
    // ARRANGE
    render(<App />);
    // ASSERT( ACT )
    expect(screen.getByText(/TODO/)).toBeInTheDocument();
  });
});
