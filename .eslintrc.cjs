module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue", "prettier"],
  rules: {
    // override/add rules settings here, such as:
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
  },
};
