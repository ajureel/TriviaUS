// **************** Question Routes (game questions) *************
// Note: questions are pulled from the 3rd party API during room creation
// Thus the focus here is getting the questions.

const router = require("express").Router();
const {Room_Question, Room} = require('../../../models');

// ************************** Get "/" Route ************************
// EXAMPLE:
// http://localhost:3001/api/q/rq/room/3
// Returns json of the most recent question

router.get("/room/:id", (req, res) => {
  Room_Question.findAll({
    where: [
      {
        room_id: req.params.id
      }
    ]
  })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

module.exports = router;