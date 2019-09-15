var express = require('express');
var router = express.Router();

const { movie } = require('../controllers');

router.get('/search', movie.search);
module.exports = router;