const router = require("express").Router();

router.get("/", (req, res) => {
  res = 'hello world';
});

module.exports = router;