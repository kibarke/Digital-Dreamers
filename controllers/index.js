const router = require('express').Router();
// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const login = require("./login")
const profile = require("./profile");
const workout = require("./workout");

router.use('/', homeRoutes);
router.use('/login', login);
router.use('/profile', profile);
router.use('/workout', workout);
// router.use('/api', apiRoutes);

module.exports = router;
