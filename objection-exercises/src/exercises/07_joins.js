const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const result = await User.query().withGraphFetched('pets')
  //console.log(result)
  // Get all users, their pets, AND their children
  const result2 = await User.query().withGraphFetched('[child, pets]');
  //console.log(result2)
  // Get all users, their parents, and their grandparents
  const result3 = await User.query().withGraphFetched('parent.parent')
  //console.log(result3)
  // Get all users, their pets, their chilren, and their childrens' pets
  const result4 = await User.query().withGraphFetched('[pets,child.pets]')
  //console.log(result4)
  // -----
  cleanup()
}

run()
