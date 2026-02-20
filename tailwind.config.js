// tailwind.config.js
module.exports = {
     content: [
       './src/**/*.{js,ts,jsx,tsx}',
       './app/**/*.{js,ts,jsx,tsx}',
       './pages/**/*.{js,ts,jsx,tsx}',
       './components/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
       extend: {
         fontFamily: {
           roboto: ['var(--font-roboto)'],
           lora: ['var(--font-lora)'],
           poppins: ['var(--font-poppins)'],
           // Add more if needed
         },
       },
     },
     plugins: [],
   }
   