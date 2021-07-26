const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Votes, PostTags, Tags } = require("../../models");
const isSignedIn = require("../../utils/userAuth");

// get all posts

router.get("/", (req, res) => {
    Post.findAll({
        attributes: [
            "id",
            "title",
            "description",
            "created_at",
            [
                sequelize.literal(
                    "(SELECT COUNT(*) FROM votes WHERE post.id = votes.post_id)"
                ),
                "vote_count",
            ],
        ],
        order: [["created_at", "DESC"]],
        include: [
            {
                model: Comment,
                attributes: [
                    "id",
                    "comment_text",
                    "post_id",
                    "user_id",
                    "created_at",
                ],
                include: {
                    model: User,
                    attributes: ["username"],
                },
            },
            {
                model: User,
                attributes: ["username"],
            },
            { model: Tags, attributes: ["title"] },
        ],
    })
        .then((dbPostData) => {
            console.log(dbPostData);
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.post("/", (req, res) => {
    // expects
    //       "title": "This is a test Title"
    //       "description": "This is a test Description",
    //       "img_id": 6,
    //       "user_id": 4,
    //       "type_id": 2,
    //       "difficulty_id": 2,
    //       "tagIds": [1,3,2],
    Post.create(req.body)
        .then((dbPostData) => {
            // make the tag pairings in the PostTag model
            if (req.body.tagIds.length) {
                const postTagIdArr = req.body.tagIds.map((tag_id) => {
                    return {
                        post_id: dbPostData.id,
                        tag_id,
                    };
                });
                return PostTags.bulkCreate(postTagIdArr);
            }
            // If there are no post tags, just respond with success
            res.status(200).json(dbPostData);
        })
        .then((postTagPairings) => res.status(200).json(postTagPairings))
        .catch((err) => {
            res.status(500).json(err);
            console.log(err);
        });
});
router.put("/:id", (req, res) => {
    // update post data
    Post.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((post) => {
            //get all the posts tags from PostTags
            return PostTags.findAll({ where: { post_id: req.params.id } });
        })
        .then((postTags) => {
            // get list of current tag_ids
            const mappedPostTagIdArr = postTags.map(({ tag_id }) => tag_id);
            // create filtered list of new tag_ids
            const newPostTags = req.body.tagIds
                .filter((tag_id) => !mappedPostTagIdArr.includes(tag_id))
                .map((tag_id) => {
                    return {
                        post_id: req.params.id,
                        tag_id,
                    };
                });
            // figure out which ones to remove
            const postTagsToRemove = postTags
                .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                .map(({ id }) => id);

            // run both actions
            return Promise.all([
                PostTags.destroy({ where: { id: postTagsToRemove } }),
                PostTags.bulkCreate(newPostTags),
            ]);
        })
        .then((updatedPostTags) => res.json(updatedPostTags))
        .catch((err) => {
            // console.log(err);
            res.status(400).json(err);
        });
});

router.delete("/:id", isSignedIn, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({ message: "No post found" });
                return;
            }
            res.json({ message: "Post deleted!" });
        })
        .catch((err) => {
            res.status(500).json(err);
            console.log(err);
        });
});

module.exports = router;
