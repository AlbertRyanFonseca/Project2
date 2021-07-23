const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Votes } = require('../../models');

// get all posts

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'post_url',
        'title',
        'description',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = votes.post_id)'), 'vote_count']
      ],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
  