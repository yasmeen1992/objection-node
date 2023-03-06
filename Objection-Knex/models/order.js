const { Model } = require('objection');

class Order extends Model {
  static get tableName() {
    return 'orders';
  };

  $beforeInsert() {
    this.created_at = new Date();
  };

  $beforeUpdate() {
    this.updated_at = new Date();
  };

  static get totalColumn() {
    return 'total';
  };

  static get customerIdColumn() {
    return 'customer_id';
  };

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['total'],
      properties: {
        id: { type: 'integer' },
        total: { type: 'number' },
        customer_id: { type: 'integer' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    };
  };
};

module.exports = Order;