<<<<<<< HEAD
const path = require("path");
const express = require("express");
const routes = require("./controllers");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = require("./config/connection");
=======
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
>>>>>>> 335e048727a4f35c4be5403a93ad5801f92070a4


const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//
// turn on routes
<<<<<<< HEAD
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
=======
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
>>>>>>> 335e048727a4f35c4be5403a93ad5801f92070a4
