const db = require('../config/connection');
const { User, EnvOrg } = require('../models');

const userData = require('./userData.json');
const envorgData = require('./envorgData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await EnvOrg.deleteMany({});

  const users = await User.insertMany(userData);
  const envorg = await EnvOrg.insertMany(envorgData);

  console.log('Users and Organisations seeded!');
  process.exit(0);
});
