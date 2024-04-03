const router = require('express').Router();

router.get('aboutUs', async (req, res) => res.render('aboutUs'));

module.exports = router;
