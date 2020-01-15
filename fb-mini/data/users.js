const casual = require('casual')


casual.define('user', () => ({
  user_id: casual.uuid,
  email: casual.email,
  name: casual.name,
  bio: casual.sentences(),
  password: casual.password,
  created_at: casual.moment,
  updated_at: casual.moment,
  profile_pic: 'asdf',
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
