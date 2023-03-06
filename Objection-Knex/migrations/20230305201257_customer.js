
exports.up = function(knex) {
  return knex.schema.createTable("customers",table =>{
     table.increments("id").primary();
     table.string("name",45).notNullable();
     table.string("email",100);


}).then(function() {
    console.log('Table created successfully');
  }).catch(function(error) {
    console.error('Error creating table:', error);
  });
  

};

exports.down = function(knex) {
    return knex.Schema.dropTable("customers");
};
