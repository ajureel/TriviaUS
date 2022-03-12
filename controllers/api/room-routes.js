const express = require("express");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Ross is in the room");
});

module.exports = router;