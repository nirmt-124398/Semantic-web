const express = require('express')
const router = express.router()
const {func1}=require("../controllers/kuchbhi")

router.route("/").get(func1)
module.exports = router