const router = require("express").Router();
//const apiRoutes = require("./api");
const questionRoutes = require("./questions");

console.log("api index");

router.use('/q',questionRoutes);
//router.use(require(apiRoutes));

module.exports = router;