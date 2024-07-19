import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/Login";

jest.mock("../supabaseConfig", () => ({
  supabase: {
    auth: {
      signInWithPassword: jest.fn().mockRejectedValue({
        error: { message: "Invalid login credentials" },
      }),
      signOut: jest.fn().mockResolvedValue({}),
    },
  },
}));

test("renders login form and shows error on invalid credentials", async () => {
  render(<Login />);

  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: "wrongpassword" },
  });

  fireEvent.click(screen.getByRole("button", { name: /login/i }));

  // Debug to see the actual output
  screen.debug();

  // Wait for error message to appear
  const errorMessage = await screen.findByText("Invalid login credentials");
  expect(errorMessage).toBeInTheDocument();
});
