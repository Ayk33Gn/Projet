const express = require("express");
const path = require("path");
const router = express.Router();

const { ClientsController } = require("./controllers");

router.get("/messages", ClientsController.browse);
router.post("/messages", ClientsController.add);

module.exports = router;
