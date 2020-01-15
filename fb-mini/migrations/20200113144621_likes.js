exports.up = async (knex) => knex.schema.createTable('likes', table => {
    table.uuid('liker_id').references('users.user_id').notNullable().onDelete('CASCADE').onUpdate('CASCADE')
    table.uuid('liked_id').references('posts.post_id').notNullable().onDelete('CASCADE').onUpdate('CASCADE')
    table.enum('emotion', ["like","dislike", "love","laugh", "angry", "sad", "wow"]).notNullable()
    table.timestamps(true)
})

exports.down = async (knex) => knex.schema.dropTableIfExists('likes')