const express = require("express");
const { RANDOM } = require("mysql/lib/PoolSelector");
const router = require("express").Router();
const { Room, Room_Question } = require('../../models');
const fetch = require('node-fetch'); //enables us to fetch from 3rd party apis
//const { response } = require("express");

const saveQuestions = (myqs) => {
    return new Promise(function(resolve, reject){
       resolve(Room_Question.bulkCreate(myqs))})
}

const createRoom = (myroom) => {
return new Promise(function (resolve, reject) {
    resolve (Room.create(myroom));
        });
}

function getRoomQuestions(myroom) {
return new Promise(function (resolve, reject) {
    // resolve ('getRoomQuestions');
    console.log('myroom', myroom);
    var requestUrl = 'https://opentdb.com/api.php?amount=' + myroom.num_q;
    console.log(requestUrl);
    var questions = [];
    fetch(requestUrl)
        .then(res => res.json())
        .then(result => {
            //console.log('result', result);
            questions = result.results;

            //create room_question records
            // for each question in result, create a new room_question
            for (var j = 0; j < questions.length; j++) {
                questions[j].room_id = myroom.id;
                //console.log(questions[j]);
                questions[j].incorrect_answers = JSON.stringify(questions[j].incorrect_answers);
                //saveQuestion(questions[j]);
            }
            })
            .then(()=>{
                    console.log ('.then', questions);
                    resolve (questions)})                   
            .catch(err => {
                console.log(err);
                resolve (err);
            });
 });
}

const newRoomCode = (req) => {
    return new Promise(function (resolve, reject) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        req['room_code'] = result;
        console.log('new room code', req);
        resolve(req);
    })
}

// *********** GET ROUTE *************
router.get('/:id', (req, res) => {
    // find a single room by its `id`
    Room.findOne({
      where: [
        {
          id: req.params.id
        }
      ]
    })
      .then(myRoom => res.json(myRoom))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});

// *********** POST ROUTE *************
// Post: http://localhost:3001/api/room/ post route to create new room
// required fields: host_id, title, num_q (#ofquestions), time_q (time per question), max_players 
// EXAMPLE:
// {
// 	"host_id" : "2",
// 	"title" : "room name here",
// 	"num_q" : "3",
// 	"time_q" : "2",
// 	"max_players" : "2"
// }

router.post('/', (req, res) => {
    // create a new room code
    var newRoom = {};
    var newQuestions = {};
    newRoomCode(req.body)
        .then(myroom => createRoom(myroom))
        .then(myRoom => {newRoom = myRoom.dataValues})
        .then(()=>getRoomQuestions(newRoom))
        .then(questions=>saveQuestions(questions))
        .then(() => {
                    // console.log('questions- end of the line', questions);
                    console.log('myroom - end of the line', newRoom);
                    return true;
                })
        .then(()=>res.status(200).send(newRoom))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
});

module.exports = router;