const router = require("express").Router();
const apiRoutes = require("./api");
<<<<<<< HEAD
const homeRoutes = require("./home-routes.js");

router.use(require("./home-routes"));

module.exports = router;
=======
//const homeRoutes = require("./home-routes.js");

//router.use(require('./home-routes'));
router.use('/api', apiRoutes);  

module.exports = router;
>>>>>>> 335e048727a4f35c4be5403a93ad5801f92070a4
