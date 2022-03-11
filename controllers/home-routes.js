const express = require("express");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Ross is the best");
});

module.exports = router;