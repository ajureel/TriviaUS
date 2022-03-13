const express = require("express");
const { RANDOM } = require("mysql/lib/PoolSelector");
const router = require("express").Router();
const {Room} = require('../../models');

const newRoomCode = (req) => {
    return new Promise(function(resolve, reject){
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
    req['room_code'] = result;
    console.log('new room code', req);
    resolve (req);
    })
}

// *********** GET ROUTE *************
router.get("/", (req, res) => {
  console.log("Ross is in the room");
  res.status(200).send("Ross is in the room!");
});

// *********** POST ROUTE *************
// Post: http://localhost:3001/api/room/ post route to create new room
// EXAMPLE:
// {
// 	"host_id" : "2",
// 	"title" : "room name here2",
// 	"num_q" : "3",
// 	"time_q" : "2",
// 	"max_players" : "2"
// }
//   And returns the full room including a room code

// create a new room  
router.post('/', (req, res) => {
    // create a new room code
    newRoomCode(req.body)
        .then(myroom =>{
            Room.create(myroom, )
            .then(myroom => {
            res.status(200).send(myroom);
            })
        })
        .catch((err) => {
        console.log(err);
        res.status(400).json(err);
        });
  });

module.exports = router;