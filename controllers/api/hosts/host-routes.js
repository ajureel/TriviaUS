const router = require('express').Router();
const { Host } = require('../../../models');
const date = require('date-and-time'); //eables us to compare dates
const today = new Date();
const path = require('path');
const public = require('../../../public');

//Create new Host
router.post('/createNew',async(req,res) =>{
    try {
        const hostUserData = await Host.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    });
    req.session.save(()=>{
        req.session.loggedIn = true;

        res.status(200).json(hostUserData);
    });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET/POST route for'login' 
router.get('/login', (req, res) => {
    res.send("Api/host/login route succesful");
  });

module.exports = router;