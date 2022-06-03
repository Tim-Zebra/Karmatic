const db = require('../config/connection');
const { xxx } = require('../models');

const xxxData = require('./xxx.json');

db.once('open', async () => {
  await xxx.deleteMany({});

  const xxx = await xxx.insertMany(xxxData);

  console.log('Technologies seeded!');
  process.exit(0);
});
