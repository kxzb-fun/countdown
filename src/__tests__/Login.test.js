import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/Login";

test("renders login form and logs in successfully", async () => {
  render(<Login />);

  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: "password" },
  });

  fireEvent.click(screen.getByText(/login/i));

  const successMessage = await screen.findByText(/welcome/i);
  expect(successMessage).toBeInTheDocument();
});
