import type { Config } from "tailwindcss";
export default {
  content:["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme:{extend:{fontFamily:{serif:["var(--font-cormorant)","serif"],sans:["var(--font-inter)","sans-serif"]},colors:{sand:"#F7F0E5",ink:"#17312F",sea:"#2D7770",coral:"#D9795D",gold:"#B99352"}}},
  plugins:[]
} satisfies Config;