const express = require('express');
const router = express.Router();

const { getLogs } = require('../controller/logs');
const { getScores } = require('../controller/score');

router.get('/logs', getLogs);
router.get('/scores', getScores);

module.exports = router;
