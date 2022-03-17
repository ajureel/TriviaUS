const router = require('express').Router();
const hostRoutes = require('./host-routes');

router.use('/', hostRoutes);

module.exports = router