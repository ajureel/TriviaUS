const router = require("express").Router();
//const apiRoutes = require("./api");
const qodRoutes = require("./qod-routes");


console.log("questions/index.js");

router.use('/qod', qodRoutes);
//router.use(require(apiRoutes));

module.exports = router;