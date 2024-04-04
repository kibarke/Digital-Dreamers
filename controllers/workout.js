const router = require('express').Router();

router.get('/', async (req, res) => res.render('workout'));

module.exports = router;
