# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Steps to setup

1. Create a new project using this command- npm create vite@latest my-project -- --template react
2. Then, changing to directory of the project- cd my-project
3. Installing the TailwindCSS and required dependencies- npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
4. Configure the tailwind.config.js file by changing the "content" property in default object like below-
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
5. Adding tailwind directives to main css file below-
@tailwind base;
@tailwind components;
@tailwind utilities;

6. Finally, run the server by command- npm run dev
7. And the vite app runs on the localhost with this kind of url- localhost:5173
