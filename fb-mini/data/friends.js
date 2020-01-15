const casual = require('casual')
const userData = require('./users')

casual.define('connection', (requesterId, requestedId) => ({
  requester_id: requesterId,
  requested_id: requestedId,
  status: casual.random_element(["pending", "accepted", "rejected"]),
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const friends = []

for (let i = 0; i < 20; ++i) {
    const requester_id = casual.random_element(userData).user_id
    const requested_id = casual.random_element(userData).user_id
    friends.push(casual.connection(requester_id, requested_id))
}

module.exports = friends