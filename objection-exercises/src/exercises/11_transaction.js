const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
  **/
 const newUser = await User.transaction(async trx => {
  const charles = await User.query(trx)
    .insert({ firstName: 'charles', lastName: 'onesti', email: 'a@a.com'})

  const palu = await charles.$relatedQuery('pets', trx)
    .insert({ type: 'DOG', name: 'palu' })

  const 

  return palu;
})


  // -----
  cleanup()
}

run()
