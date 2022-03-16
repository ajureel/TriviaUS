const router = require("express").Router();
const questionRoutes = require("./questions");
const roomRoutes = require("./room-routes");
const hostRoutes = require("./hosts");

console.log("api index");

router.use('/q',questionRoutes);
router.use('/room',roomRoutes);
router.use('/host', hostRoutes);


module.exports = router;