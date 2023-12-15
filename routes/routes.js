const express = require('express');
const { getJsonData } = require('../controller/jsonController');
const router = express.Router();

router.get('/apiMur', getJsonData)

module.exports = router;