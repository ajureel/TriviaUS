const router = require("express").Router();
//const apiRoutes = require("./api");
const qodRoutes = require("./qod-routes");
const roomQRoutes = require("./room-question-routes");


//console.log("questions/index.js");

router.use('/qod', qodRoutes);
router.use('/rq', roomQRoutes);

module.exports = router;