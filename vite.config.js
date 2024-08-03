import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:"/",//working with slash only but chatgpt saying should contain repo name
  plugins: [react()],
});
