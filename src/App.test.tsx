import App from "./App";
import { render, screen } from "./utils/test-utils";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(screen.getByText(/TODO/)).toBeInTheDocument();
  });
});
