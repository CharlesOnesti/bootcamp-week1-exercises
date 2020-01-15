const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('connection', (likerId, likedId) => ({
  liker_id: likerId,
  liked_id: likedId,
  emotion: casual.random_element(["like","dislike", "love","laugh", "angry", "sad", "wow"]),
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const likes = []

for (let i = 0; i < 20; ++i) {
    const likerId = casual.random_element(userData).user_id
    const likedId = casual.random_element(postData).post_id
    likes.push(casual.connection(likerId, likedId))
}

module.exports = likes