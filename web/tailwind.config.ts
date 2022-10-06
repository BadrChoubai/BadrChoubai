import { Config } from "tailwindcss";

export default <Config> {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Avenir', 'sans-serif'],
      display: ['InterVariable', 'serif'],
      nav: ['Arvo', 'sans-serif']
    },
  },
  plugins: [],
}
