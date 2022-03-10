const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

router.use(require("./home-routes"));

module.exports = router;
