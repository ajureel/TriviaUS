const path = require("path");
const fs   = require("fs");
const express = require("express");
const app = express();
const routes = require("./controllers");
const session = require("express-session");
const exphbs = require("express-handlebars");

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");


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

const publicPath = path.resolve(__dirname, "public"); 
const htmlPath = path.join(publicPath, "index.html");

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// turn on routes
app.use('/', routes);

//app.use ('/', public);
app.use(express.static('public'));

// // Route to Homepage
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

// // GET/POST route for'login' 
// app.get('/public/login.html', (req, res) => {
//   res.sendFile(__dirname + '/public/login.html');
// });

// app.post('/public/login.html', (req, res) => {
//   //insert login here
//   let username = req.body.username;
//   let password = req.body.password;
//   res.send(`Username: ${username} Password: ${password}`);
// });

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on ' + PORT));
});