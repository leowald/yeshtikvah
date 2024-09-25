import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js", // assuming the test folder is in the root of our project
    reporters: ["default"],
  },

  server: {
    host: true,
    port: 5173, // This is the port which we will use in docker
    open: true,
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
    watch: {
      usePolling: true,
    },
  },
});

// host: "0.0.0.0",
