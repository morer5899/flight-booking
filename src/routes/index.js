const express = require('express');
const v1Routes = require('./v1/index.js');

const router = express.Router();

console.log("routes");

router.use('/v1', v1Routes);

module.exports = router;
