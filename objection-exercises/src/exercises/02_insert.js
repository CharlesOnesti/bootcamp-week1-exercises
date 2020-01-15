const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const result = await User.query().insert({firstName: 'Oharles', lastName: 'Cnesti', age: '19', email: 'asdf@asdf.asdf'}).returning('*')
  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const result1 = await Pet.query().insert({type: 'FISH', name: 'Puffer', ownerId: '48194c89-fdaf-49c4-83c8-47f47bf486a3'}).returning('*')
  // -----
  cleanup()
}

run()
