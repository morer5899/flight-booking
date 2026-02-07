const express = require('express');
const { info } = require('../../controllers/index.js'); // CommonJS require
const airplaneRouts=require("./airplane-routs.js")
const router = express.Router();

router.use("/airplane",airplaneRouts);
router.get('/info', info); // Note: use the correct variable name 'info'

module.exports = router;
