const router = require('express').Router();

router.get('contact', async (req, res) => res.render('contact'));

module.exports = router;
