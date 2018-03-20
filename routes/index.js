const express = require('express');
const router = express.Router();

// API 
router.get('/api', (req, res) => {
    // express.static(__dirname + '/');
    res.send('api');
});

module.exports = router;

