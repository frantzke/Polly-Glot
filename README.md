# Polly Glot

Polly Glot is a powerful translation app that allows users to effortlessly translate text into French, Spanish, or Japanese. Powered by OpenAI's advanced translation capabilities, Polly Glot provides accurate and reliable translations for a wide range of purposes.

With Polly Glot, language barriers become a thing of the past. Users can simply enter the text they want to translate and select their desired target language. Whether it's a simple phrase, a paragraph, or even an entire document, Polly Glot can handle it all.

The app leverages OpenAI's cutting-edge translation technology to ensure high-quality translations that capture the nuances and context of the original text. This means that users can trust Polly Glot to deliver accurate and natural-sounding translations every time.

Polly Glot also offers a user-friendly interface, making it easy for anyone to use. The intuitive design allows users to quickly enter their text, select the target language, and receive the translated result in a matter of seconds. The app also supports multiple translations at once, allowing users to compare translations side by side.

Whether you're a traveler, a language enthusiast, or someone who needs to communicate with people from different parts of the world, Polly Glot is the perfect tool to bridge the language gap. Experience the power of OpenAI's translation technology with Polly Glot and unlock a world of possibilities.


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
