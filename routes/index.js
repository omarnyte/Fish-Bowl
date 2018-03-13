const express = require('express');
const router = express.Router();

router.get('/', () => {
    res.send('hi');
});

module.exports = router;
