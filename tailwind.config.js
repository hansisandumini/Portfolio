/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:"Roboto",
        spaceMono:"Space+Mono"
      },
      boxShadow: {
        'white': '0 0 10px rgba(255, 255, 255, 0.5)',
        // ...
      },
      borderColor:{
        "primary": "rgb(85, 81, 227)",
        "secondary": "#2b2d77",
      },
      blur: {
        xs: '2px',
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/hanuman.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

