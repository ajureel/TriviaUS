const { Player } = require('../models');

const playerData = [
  { 
    screen_name: 'XTC'
  },
  {
    screen_name: 'Jocko'
  },
  {
    screen_name: 'JD'
  },
  {
    screen_name: 'WdRWmN'
  }
];

const seedPlayer = () => Player.bulkCreate(playerData);

module.exports = seedPlayer;