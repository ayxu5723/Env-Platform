const db = require('../config/connection');
const { User, Announcements } = require('../models');
const userSeeds = require('./userSeeds.json');
const announcementSeeds = require("./announcementSeed.json")

db.once('open', async () => {
  try {
    await Announcements.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    for (let i = 0; i < announcementSeeds.length; i++) {
      const { _id, username } = await Announcements.create(announcementSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            announcements: _id,
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
