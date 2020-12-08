
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments()
      table.text('modal', 128).unique().notNullable()
      table.text('VIN', 128).unique().notNullable()
      table.text('make', 128).unique().notNullable()
      table.decimal('mileage')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
