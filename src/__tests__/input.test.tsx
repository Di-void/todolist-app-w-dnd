import { render, screen, within, userEvent } from "@/utils/test-utils";
import Input from "@/components/todo/input/Input";

// SUITE
describe("Input Form Component", () => {
  // TEST
  it("textbox and checkbox render", () => {
    // arrange
    const { getByRole } = render(<Input />);

    const formElement = getByRole("form");
    const checkbox = within(formElement).getByRole("checkbox");
    const inputField = within(formElement).getByRole("textbox");

    expect(formElement).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });
});

// SUITE
describe("Enter text in input form", () => {
  it("input has focus and can be updated", async () => {
    const user = userEvent.setup();
    // arrange
    const { getByRole } = render(<Input />);
    const formElement = getByRole("form");
    const inputField = within(formElement).getByRole("textbox");
    inputField.focus();
    expect(inputField).toHaveFocus();

    await user.keyboard("a");
    expect(inputField).not.toHaveValue("");
  });
});
