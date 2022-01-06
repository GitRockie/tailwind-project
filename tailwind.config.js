module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  plugin: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),
    // ...
  ],
};
