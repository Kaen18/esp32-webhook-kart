const express = require("express")
const { _receptorController } = require("../controllers/receptor.ctrl")
const router = express.Router()

router.post("/transfer", _receptorController)


module.exports = router