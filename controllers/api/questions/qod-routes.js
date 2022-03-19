const router = require("express").Router();
const {QoD} = require('../../../models');
const { getQoDPromise, newQoDPromise } = require('../../../utils/q-helpers');

// ************************** Get "/" Route ************************
// EXAMPLE:
// http://localhost:3001/api/q/qod/
// Returns json of the most recent question

router.get("/", (req, res) => {
  console.log("qod-routes");
  getQoDPromise()
    .then(qod => newQoDPromise(qod))
    .then(newq =>res.json(newq))
    .catch(err => {
          console.log(err);
          res.status(500).json(err);
    });  
});

module.exports = router;