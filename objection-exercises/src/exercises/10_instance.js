const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const me = await User.query().findById('8a3a5629-dcd4-4b1a-8679-d0379a45b09f')
  // Use that instance to create a new pet related that user
  /*await me.$relatedQuery('pets').insert({
        type: 'DOG',
        name: 'Shep',
  })*/

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const result = await me.$fetchGraph().withGraphFetched('[child, pets]').returning('*')

  // -----
  cleanup()
}

run()
