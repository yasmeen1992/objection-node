const { Model } = require('objection');
const Knex = require('knex');

// Initialize knex.
const knex = Knex({
  client: 'mysql',
  connection: {
    host: "localhost",
    user: "root", // replace with your mysql username
    password: "yasmeen@123", // replace with your mysql password
    database: "demo" // replace with your db name
  },
});

// Give the Knex instance to Objection.
Model.knex(knex);

module.exports = knex;