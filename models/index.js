const Host = require('./host.js');
const Room = require("./room.js");
const Player = require('./player.js');
const Room_Player = require('./room_player.js');

// create associations
Host.hasMany(Room, {
    foreignKey: 'host_id'
  });

Room.belongsTo(Host, {
foreignKey: 'host_id',
});

Room.belongsToMany(Player, {
  through: Room_Player,
  as: 'games_played',
  foreignKey: 'room_id'
});

Player.belongsToMany(Room, {
  through: Room_Player,
  as: 'games_played',
  foreignKey: 'player_id'
});

Room_Player.belongsTo(Room, {
  foreignKey: 'room_id'
});

Room_Player.belongsTo(Player, {
  foreignKey: 'player_id'
});

Room.hasMany(Room_Player, {
  foreignKey: 'room_id'
});

Player.hasMany(Room_Player, {
  foreignKey: 'player_id'
});

module.exports = { Host, Room, Player, Room_Player };