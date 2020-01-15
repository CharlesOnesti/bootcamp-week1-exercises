exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('user_id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))
  table.string('email').unique().notNullable()
  table.string('name').notNullable()
  table.string('bio')
  table.string('password').notNullable()
  table.timestamps(true)
  table.string('profile_pic')
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
