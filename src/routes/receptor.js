const express = require("express")
const { _receptorController } = require("../controllers/receptor.ctrl")
const router = express.Router()

router.post("/tansfer", _receptorController)


module.exports = router