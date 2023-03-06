const Customer = require('./models/customer');
const Order = require('./models/order');
const knex = require('./util/database');

async function main() {
    // Delete all persons from the db.
    await Order.query().delete();
    await Customer.query().delete();
    
    // Insert one row to the database.
    const customer = await Customer.query().insert({
      name: 'Rachel Green',
      email: 'rg@gmail.com',
    });
    console.log(customer)
  
    // Read all rows from the db.
    const customerRead = await Customer.query();
    console.log("customerRead",customerRead);

    const order = await Customer.relatedQuery('order')
                        .for(customer.id)
                        .insert({ total: 55 });
    console.log(order);

    const orderTotal = await Order.query()
                                .select('total')
                                .where('customer_id', '=', customer.id)
                                .orderBy('total');
    
    console.log("orderTotal:",orderTotal);
  }
  
  main()
    .then(() => knex.destroy())
    .catch((err) => {
      console.error(err);
      return knex.destroy();
    });