# About
EZAccess is a browser extension to be access your data in 2 clicks.

It's primary purpose is to reduce the effort to fill out data that is repeatedly accessed across various sites.
For example: LinkedIn, Twitter, GitHub, Email, etc.

To download the extension, click [here](https://github.com/Shobhit-Nagpal/ezaccess/releases/latest/download/ezaccess.crx).

# Installation
- Download ezaccess.crx file
- Go to [chrome://extensions/](chrome://extensions/)
- Turn on Developer Mode 
- Drag the crx file on to the console
- Press "Add extension" to the notification that pops up
- Turn off developer mode
- Pin EZAccess, use it and save your time

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
