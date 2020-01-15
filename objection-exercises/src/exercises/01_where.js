const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const result = await User.query().where('firstName','Alena')
  console.log(result)
  // Do the same with object notation
  const result2 = await User.query().where({firstName: 'Alena'})
  console.log(result2)
  // Get all DOGS and BIRDS
  const result3 = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(result3)

  // -----
  cleanup()
}

run()
