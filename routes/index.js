const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    express.static(__dirname + '/');
    // res.send('/');
});

// API 

module.exports = router;

