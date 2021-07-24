const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/exercises');
        return;
    }

    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

router.get('/exercises', (req, res) => {
    res.render('exercises');
});

module.exports = router;