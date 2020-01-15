const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const result = await User.query().first()
  console.log(result.fullName)
  // -----
  cleanup()
}

run()
