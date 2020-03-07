const postgraphileOptions = {

    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    retryOnInitFail: true,
    appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")]

};

module.exports = postgraphileOptions