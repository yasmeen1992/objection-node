
exports.up = function(knex) {
    return knex.schema.table("orders",table =>{
           table.timestamps(false,true);
    })
};

exports.down = function(knex) {
    return knex.schema.table("orders",table =>{
        table.dropTimestamps();
 })
};
