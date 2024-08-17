/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        chatbotBlue: '#1E3A8A',  // Custom blue color for the chatbot
      },
      spacing: {
        '128': '32rem',  // Example custom spacing
      },
    },
  },
  plugins: [],
};
