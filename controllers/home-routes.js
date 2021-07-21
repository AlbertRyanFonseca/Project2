const router = require('express').Router();

router.get('/', (res, res) => {
    res.render('homepage');
});

module.exports = router;