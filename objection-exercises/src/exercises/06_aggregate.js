const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const result = await User.query().resultSize()
  //console.log(result)
  // Get the average age of users
  const result2 = await User.query().avg('age as avgAge')
  console.log(result2)
  // Get the total number of dogs
  const result3 = await Pet.query().where('type','DOG').resultSize()
  //console.log(result3)
  // -----
  cleanup()
}

run()
