module.exports = {
  client: {
    includes: ["./src/graphql/**/*.ts"], // array of glob patterns
    service: {
      name: "Icapital",
      url: "https://icapital-cms.frontiertech.org/graphql",
    },
  },
};
