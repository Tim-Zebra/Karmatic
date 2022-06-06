const db = require('../config/connection');
const { User, Location } = require('../models');
const userSeeds = require('./userSeeds.json');
const locationSeeds = require('./locationSeeds.json');
db.once('open', async () => {
  try {
    // Clears out DB
    await User.deleteMany({});

    // Creates new collections
    // Creates users
    await User.create(userSeeds);

    // Adds location along with the user
    for (let i = 0; i < thoughtSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
