exports.up = async (knex) => knex.schema.createTable('friends', table => {
    table.uuid('requester_id').references('users.user_id').notNullable().onDelete('CASCADE').onUpdate('CASCADE')
    table.uuid('requested_id').references('users.user_id').notNullable().onDelete('CASCADE').onUpdate('CASCADE')
    table.enum('status', ["pending", "accepted", "rejected"]).notNullable()
    table.timestamps(true)
})

exports.down = async (knex) => knex.schema.dropTableIfExists('friends')