/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        grayJob: {
          400: '#DFDEDE',
                },
        blueJob:{
          100:"rgb(223 222 222 / var(--tw-border-opacity))",
          400:'#008EDC'
        }
      },
    },
  },
  plugins: [],
}

