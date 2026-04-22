import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tanstackStart(),
		nitro({ preset: "vercel" }),
		react(),
		tailwindcss(),
		tsConfigPaths(),
	],
	resolve: {
		dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
	},
	server: {
		host: true,
		port: 5173,
		strictPort: true,
	},
});
