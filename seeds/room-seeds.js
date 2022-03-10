const { Room } = require('../models');

const roomData = [
  { 
    title: 'Totally Crazy Trivia Night',
    status: "OPEN", //OPEN, INPROGRESS, CLOSED
    host_id: 1,
    room_code: 'THRIZ1'
  },
  {
    title: 'Whats Up Crazy Trivia Night',
    status: "INPROGRESS", //OPEN, INPROGRESS, CLOSED
    host_id: 2,
    room_code: 'THRIZ2'
  },
  {
    title: 'Silly Trivia Night',
    status: "CLOSED", //OPEN, INPROGRESS, CLOSED
    host_id: 3,
    room_code: 'THRIZ3'
  }
];

const seedRoom = () => Room.bulkCreate(roomData);

module.exports = seedRoom;