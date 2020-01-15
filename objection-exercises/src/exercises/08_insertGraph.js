const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const result = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: ';lkj@;lkj.;lkj',
    age: '20',
    pets: [
      {
        type: 'DOG',
        name: 'Rocco',
      },
      {
        type: 'DOG',
        name: 'Rosey',
      },
    ],
  }).returning('*')
  
  // -----
  cleanup()
}

run()
