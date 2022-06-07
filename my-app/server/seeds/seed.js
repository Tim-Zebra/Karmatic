const db = require('../config/connection');
const { User, Location, KarmaPost } = require('../models');
const userSeeds = require('./userSeeds.json');
const locationSeeds = require('./locationSeeds.json');
const karmaPostSeeds = require('./karmaPostSeeds.json')

// Resets DB and seeds
db.once('open', async () => {
  try {
    // Clears out DB collections
    await User.deleteMany({});
    await Location.deleteMany({});
    await KarmaPost.deleteMany({});

    // Creates new collections for each module
    await User.create(userSeeds);


    // Adds location to user documents karmaGroups [] / Links Location to Users
    // Loops through locationSeeds []
    for (let i = 0; i < locationSeeds.length; i++) {
      // Creates Location document, and gets the _id value
      const { _id } = await Location.create(locationSeeds[i]);

      // Loops through the members array
      for(let k = 0; k < locationSeeds[i].members.length; k++) {
        // finds specific member for query
        let member = locationSeeds[i].members[k].member;

        // Adds location id to user array karmaGroups []
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

    // Adds usernames to user documents karmaPosts [] and karmaHelping [] / Links karmaPosts to Users
    // Loops through locationSeeds []
    for (let i = 0; i < karmaPostSeeds.length; i++) {
      // Creates KarmaPost document, and gets the _id value and author
      const { _id, postAuthor } = await KarmaPost.create(karmaPostSeeds[i]);
      // Adds karmaPost to user array karmaPosts []
      const user = await User.findOneAndUpdate(
        { username: postAuthor },
        {
          $addToSet: {
            karmaPosts: _id,
          },
        }
      );

      // Loops through the helpers array
      for(let k = 0; k < karmaPostSeeds[i].karmaHelpers.length; k++) {
        // finds specific helper for query
        let helper = karmaPostSeeds[i].karmaHelpers[k].helperUsername;

        // Adds karmaPost id to user array karmaHelping []
        const user = await User.findOneAndUpdate(
          { username: helper },
          {
            $addToSet: {
              karmaHelping: _id,
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