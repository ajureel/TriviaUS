const seedHost = require('./host-seeds');
const seedRoom = require('./room-seeds');
const seedPlayer = require('./player-seeds');
const seedRoomPlayer = require('./room_player-seeds');
const seedQoD = require('./qod-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedHost();
  console.log('\n----- Host SEEDED -----\n');

  await seedRoom();
  console.log('\n----- Room SEEDED -----\n');

  await seedPlayer();
  console.log('\n----- Player SEEDED -----\n');

  await seedRoomPlayer();
  console.log('\n----- RoomPlayer SEEDED -----\n');

  await seedQoD();
  console.log('\n----- QoD SEEDED -----\n');

  process.exit(0);
};

seedAll();
