import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"move-left": {
					"0%": { transform: "translate(0, 0) scale(1)" },
					"100%": { transform: "translate(-800px, 0) scale(2.5)" },
				},
				"move-right": {
					"0%": { transform: "translate(0, 0) scale(1)" },
					"100%": { transform: "translate(800px, 0) scale(2.5)" },
				},
				"move-top-right": {
					"0%": { transform: "translate(0, 0) scale(1)" },
					"100%": { transform: "translate(600px, -400px) scale(2.5)" },
				},
				"move-top-left": {
					"0%": { transform: "translate(0, 0) scale(1)" },
					"100%": { transform: "translate(-600px, -400px) scale(2.5)" },
				},
				"move-bottom-right": {
					"0%": { transform: "translate(0, 0) scale(1)" },
					"100%": { transform: "translate(600px, 400px) scale(2.5)" },
				},
				"move-bottom-left": {
					"0%": { transform: "translate(0, 0) scale(1)" },
					"100%": { transform: "translate(-600px, 400px) scale(2.5)" },
				},
				"swipe-left": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" },
				},
				"swipe-right": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(100%)" },
				},
			},
			animation: {
				"move-left": "move-left 10s ease-in-out infinite",
				"move-right": "move-right 10s ease-in-out infinite",
				"move-top-right": "move-top-right 10s ease-in-out infinite",
				"move-top-left": "move-top-left 10s ease-in-out infinite",
				"move-bottom-right": "move-bottom-right 10s ease-in-out infinite",
				"move-bottom-left": "move-bottom-left 10s ease-in-out infinite",
				"swipe-left": "swipe-left 10s linear infinite",
				"swipe-right": "swipe-right 10s linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
