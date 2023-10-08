exports.up = function (knex) {
    return knex.schema
      .createTable('users', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
      .createTable('todos', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.boolean('completed').notNullable().defaultTo(false);
        table.integer('user_id').references('id').inTable('users');
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .hasTable('todos')
      .then((exists) => {
        if (exists) {
          return knex.schema.dropTable('todos');
        }
      })
      .then(() => {
        return knex.schema.hasTable('users').then((exists) => {
          if (exists) {
            return knex.schema.dropTable('users');
          }
        });
      });
  };
  