import { rest } from "msw";

export const handlers = [
  // Mock the signup request
  rest.post(
    "https://your-supabase-url.supabase.co/auth/v1/signup",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          user: {
            id: "mock-user-id",
            email: req.body.email,
          },
        })
      );
    }
  ),

  // Mock the signin request
  rest.post(
    "https://your-supabase-url.supabase.co/auth/v1/token?grant_type=password",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          access_token: "mock-access-token",
          refresh_token: "mock-refresh-token",
          user: {
            id: "mock-user-id",
            email: req.body.email,
          },
        })
      );
    }
  ),

  // Add more handlers as needed
];
