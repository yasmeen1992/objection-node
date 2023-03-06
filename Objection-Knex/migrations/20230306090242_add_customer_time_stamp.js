
exports.up = function(knex) {
    return knex.schema.table("customers",table =>{
           table.timestamps(false,true);
    })
};

exports.down = function(knex) {
    return knex.schema.table("customers",table =>{
        table.dropTimestamps();
 })
};