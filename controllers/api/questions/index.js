const router = require("express").Router();
//const apiRoutes = require("./api");
const qodRoutes = require("./qod-routes");

router.use('/qod', qodRoutes);
//router.use(require(apiRoutes));

module.exports = router;