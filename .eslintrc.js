module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off"
  }
};
