const router = require('express').Router();

router.get('workouts', async (req, res) => res.render('workout'));

module.exports = router;
