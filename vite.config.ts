import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

const isBuild = process.env.NODE_ENV === "production";

export default defineConfig({
	plugins: [
		tanstackStart(),
		react(),
		tailwindcss(),
		tsConfigPaths(),
		...(isBuild ? [cloudflare()] : []),
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
