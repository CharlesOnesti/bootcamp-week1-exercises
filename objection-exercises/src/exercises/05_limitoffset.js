const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const result = await User.query().limit(5).orderBy('lastName')
  console.log(result)
  // Get the second 5 users, ordered by lastName
  const result2 = await User.query().limit(5).offset(5).orderBy('lastName').returning('*')

  // -----
  cleanup()
}

run()
