/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
    theme: {
    extend: {
      fontFamily : {
        sora : ["Sora","sans-serif"],
        "dancing-script" : ["Dancing Script","cursive"]
      },
      backgroundImage : {
        "header-image-1" :  "linear-gradient(to bottom,rgb(255,255,255,0.75),transparent),url(../../images/header-img-1.png)",
        "healthy-juice" : "linear-gradient(to bottom,rgb(255,255,255,0.75),transparent),url(../../images/healthy-juice.png)",
        "about-image" : "url(../../images/hero-image-2.png)",
        "organic" : "linear-gradient(to bottom,rgb(255,255,255,1.5),transparent),url(../../images/about-hero-2.png)",
        'pineapple' : "url(../../images/pineapple.png)",
       'contact-us' : "url(../../images/contact-us-img 1.png)",
      }
    },
  },
  plugins: [  require('preline/plugin'),],
}

