// const postgraphileOptions = {
//   legacyRelations: "omit",
//   watchPg: true,
//   graphiql: true,
//   enhanceGraphiql: true,
//   retryOnInitFail: true,
//   appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")]
// };
const postgraphileOptions = {
  subscriptions: true,
  watchPg: true,
  dynamicJson: true,
  setofFunctionsContainNulls: false,
  ignoreRBAC: false,
  // ignoreIndexes: false,
  showErrorStack: "json",
  simpleCollections: "only",
  extendedErrors: ["hint", "detail", "errcode"],
  appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
  exportGqlSchemaPath: "schema.graphql",
  graphiql: true,
  enhanceGraphiql: true,
  allowExplain(req) {
    // TODO: customise condition!
    return true;
  },
  enableQueryBatching: true,
  legacyRelations: "omit",
  pgSettings(req) {
    /* TODO */
  },
};
module.exports = postgraphileOptions;
