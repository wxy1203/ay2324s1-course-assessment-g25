const express = require('express')
const matchController = require("../controllers/matchController");
const matchRouter = express.Router();

matchRouter.post("/add", matchController.findMatch)
matchRouter.delete("/deleteMatch/:username", matchController.cancelFindMatch)
matchRouter.get("/getPair/:username", matchController.getPairByUsername)
matchRouter.delete("/deletePair/:username", matchController.deletePair)

module.exports = matchRouter