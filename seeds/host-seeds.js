const { Host } = require('../models');

const hostData = [
  { 
    first_name: 'Joe',
    last_name: 'Cool',
    email: 'JoeCool@test.test',
    password: '123Test'
  },
  {
    first_name: 'Amir',
    last_name: 'Singh',
    email: 'AmirSingh@test.test',
    password: '123ASTest'
  },
  {
    first_name: 'Jane',
    last_name: 'Rocks',
    email: 'JaneRocks@test.test',
    password: '123JRTest'
  },
  {
    first_name: 'Some',
    last_name: 'Test',
    email: 'JoeTest@test.test',
    password: '123JTTest'
  }
];

const seedHost = () => Host.bulkCreate(hostData);

module.exports = seedHost;