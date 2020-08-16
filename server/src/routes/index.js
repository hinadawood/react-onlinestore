const express = require('express');
const router = express.Router();

router.use('/api', require('./catalogRouter.js'));
router.use('/api', require('./loginRouter.js'));

module.exports = router;
