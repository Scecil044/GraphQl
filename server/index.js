const express = require("express");
require("dotenv").config();
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
const connectDb = require("./config/db");

const app = express();
connectDb();
const port = process.env.PORT || 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
  })
);

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
