const router = require("express").Router();
const qodRoutes = require("./qod-routes");


console.log("questions/index.js");

router.use('/qod', qodRoutes);

module.exports = router;