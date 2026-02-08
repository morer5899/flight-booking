const express = require('express');
const { info } = require('../../controllers/index.js'); // CommonJS require
const airplaneRouts=require("./airplane-routs.js")
const cityRoutes=require("./city-routes.js");
const router = express.Router();

router.use("/airplane",airplaneRouts);
router.use("/city",cityRoutes);
router.get('/info', info); // Note: use the correct variable name 'info'

module.exports = router;
