const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = (async () => {
  // Write Queries and Logs Here !!!

  // Get all pets
  const result = await Pet.query()

  // Get the name and age of all users
  const result2 = await User.query().select('firstName','age')
  console.log(result2)

  // ------
  cleanup()
})

run()
