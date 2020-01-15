exports.up = async (knex) => knex.schema.createTable('posts', table => {
    table
    .uuid('post_id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('poster_id').references('users.user_id').notNullable().onDelete('CASCADE').onUpdate('CASCADE')
    table.string('content').notNullable()
    table.timestamps(true)
})

exports.down = async (knex) => knex.schema.dropTableIfExists('posts')