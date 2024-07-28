import { type Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"brutal-sm": "2px 2px 0px rgba(0,0,0,1)",
				"brutal-base": "4px 4px 0px rgba(0,0,0,1)",
				"brutal-lg": "8px 8px 0px rgba(0,0,0,1)",
			},
		},
	},
	plugins: [],
} satisfies Config;
