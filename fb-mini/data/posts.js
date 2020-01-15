const casual = require('casual')
const userData = require('./users')

casual.define('post', owner_id =>({
    post_id: casual.uuid,
    poster_id: owner_id,
    content: casual.sentences(),
    created_at: casual.moment,
    updated_at: casual.moment,
    
}))

const posts = []

for (let i = 0; i < 10; i++) {
    const owner_id = casual.random_element(userData).user_id
    posts.push(casual.post(owner_id))
}

module.exports = posts