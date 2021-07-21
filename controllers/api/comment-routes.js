const router = require("express").Router();
const { Comment } = require("../../models");
// grab number of comments per post?
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbComData => {
        res.status(200).json(dbComData)
    }).catch(err => (
        res.status(500).json(err)
    ));
});

router.post('/', (req, res) => {
    Comment.create({
        title: req.body.title,
        body: req.body.body,
        user_id: req.body.user_id
    }).then(dbComData => {
        res.status(200).json({message: "Successfully Created"}, dbComData)
    }).catch(err => {
        res.status(500).json(err)
    });
});
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: red.params.id
        }
    }).then(dbComData => {
        if (!dbComData) {
            res.json(404).json({message: "Something Went Wrong, we cant find the comment for some reason"})
            return;
        }
        res.json(dbComData)
    }).catch(err => {
        res.status(500).json(err);
    })
})

    
module.exports = router;