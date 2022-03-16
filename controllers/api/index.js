const router = require("express").Router();
//const apiRoutes = require("./api");
const questionRoutes = require("./questions");
const roomRoutes = require("./room-routes");

console.log("api index");

router.use('/q',questionRoutes);
router.use('/room',roomRoutes);
//router.use(require(apiRoutes));

module.exports = router;