const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
//app.use('/api', apiRoutes);
app.use('/', routes);

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// GET/POST route for'login' 
app.get('/public/login.html', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/public/login.html', (req, res) => {
  //insert login here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on ' + PORT));
});