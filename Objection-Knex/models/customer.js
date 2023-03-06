const { Model } = require('objection');
const Order = require('./order');

class Customer extends Model {
  static get tableName() {
    return 'customers';
  };

  $beforeInsert() {
    this.created_at = new Date();
  };

  $beforeUpdate() {
    this.updated_at = new Date();
  };

  static get nameColumn() {
    return 'name';
  };

  static get emailColumn() {
    return 'email';
  };

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    };
  };

  static relationMappings = {
    order: {
      relation: Model.HasOneRelation,
      modelClass: Order,
      join: {
        from: 'customers.id',
        to: 'orders.customer_id'
      }
    }
  };


};
// async function createSchema() {
//   if (await knex.schema.hasTable('customers')) {
//     return;
//   }
//   if (await knex.schema.hasTable('Orders')) {
//     return;
//   }

//   // Create database schema. You should use knex migration files
//   // to do this. We create it here for simplicity.
//   await knex.schema.createTable('customers', table => {
//     table.increments('id').primary();
//     table.integer('parentId').references('customers.id');
//     table.string('email');
//     table.string('createdAt');
//     table.string('updatedAt');
//   });
//   await knex.schema.createTable('Orders', table => {
//     table.increments('id').primary();
//     table.integer('customer_id').references('customers.id');
//     table.integer('total');
//     table.string('createdAt');
//     table.string('updatedAt');
//   });
// }

module.exports = Customer;