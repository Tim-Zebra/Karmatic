const db = require('../config/connection');
const { User, Location } = require('../models');
const userSeeds = require('./userSeeds.json');
const locationSeeds = require('./locationSeeds.json');

// Resets DB and seeds
db.once('open', async () => {
  try {
    // Clears out DB collections
    await User.deleteMany({});
    await Location.deleteMany({});

    // Creates new collections for each module
    await User.create(userSeeds);


    // Adds location to user documents karmaGroups [] / Links Location to Users
    // Loops through locationSeeds []
    for (let i = 0; i < locationSeeds.length; i++) {
      const { _id } = await Location.create(locationSeeds[i]);
console.log('This happened', locationSeeds[i].members);
      // Loops through the members array
      for(let k = 0; k < locationSeeds[i].members.length; k++) {
        // sets variables 
        let member = locationSeeds[i].members[k].member;

        // Adds location data to user array karmaGroups []
        const user = await User.findOneAndUpdate(
          { username: member },
          {
            $addToSet: {
              karmaGroups: _id,
            },
          }
        );
      }
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});