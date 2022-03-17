const router = require("express").Router();
const apiRoutes = require("./api");
const hostRoutes = require("./api/hosts/");

//router.use(require('./home-routes'));
router.use('/api', apiRoutes);  

module.exports = router;
