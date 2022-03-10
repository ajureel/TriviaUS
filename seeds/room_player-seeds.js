const { Room_Player } = require('../models');

const room_playerData = [
  { 
    player_id: 1,
    room_id: 1
  },
  {
    player_id: 2,
    room_id: 1
  },
  {
    player_id: 3,
    room_id: 2
  },
  {
    player_id: 4,
    room_id: 2
  }
];

const seedRoomPlayer = () => Room_Player.bulkCreate(room_playerData);

module.exports = seedRoomPlayer;