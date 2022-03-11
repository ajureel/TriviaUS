const router = require("express").Router();
const {QoD} = require('../../../models')

// EXAMPLE:
// http://localhost:3001/api/q/qod/
// Returns json of the most recent question

router.get("/", (req, res) => {
  console.log("qod-routes");
  QoD.findOne({
    order: [ [ 'id', 'DESC' ]]
    })
    .then(dbqod => res.json(dbqod))
    .catch(err => {
          console.log(err);
          res.status(500).json(err);
    });  
});

module.exports = router;