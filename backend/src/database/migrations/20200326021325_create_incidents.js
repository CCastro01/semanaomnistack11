
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); 
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();
        table.string('ong_email').notNullable();
        table.string('ong_senha').notNullable();


        table.foreign('ong_id').references('id').inTable('ongs');
        table.foreign('ong_email').references('email').inTable('ongs');
        table.foreign('ong_senha').references('senha').inTable('ongs');
   
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
