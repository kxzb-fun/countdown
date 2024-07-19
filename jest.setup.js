import "@testing-library/jest-dom";
require("dotenv").config();
globalThis.import = {
  meta: {
    env: {
      VITE_SUPABASE_URL: process.env.VITE_SUPABASE_URL,
      VITE_SUPABASE_KEY: process.env.VITE_SUPABASE_KEY,
    },
  },
};
