
exports.up = function(knex) {
    return knex.schema.createTable("orders",table =>{
        table.increments("id").primary();
        table.double("total");
        table.integer('customer_id').unsigned().notNullable();
        table.foreign("customer_id").references("customers.id");
   
   }).then(function() {
       console.log('Table created successfully');
     }).catch(function(error) {
       console.error('Error creating table:', error);
     });
  
};

exports.down = function(knex) {
    return knex.Schema.dropTable("orders");
  
};
