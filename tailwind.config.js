/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'job-hiring': "url('/public/img/hiring.jpg')",
      }
    }
  },
  plugins: [],
}

