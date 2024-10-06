module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
};
