/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Inclui todos os arquivos relevantes dentro da pasta src
  ],
  theme: {
    extend: {}, // Aqui você pode adicionar customizações para temas
  },
  plugins: [], // Adicione plugins do Tailwind CSS se necessário
}
