const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
    res.render("homepage");
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/exercises");
        return;
    }

    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/profile", (req, res) => {
    res.render("profile");
});

router.get("/exercises", (req, res) => {
    Post.findAll({
        attributes: [
            "id",
            "title",
            "description",
            "img_url",
            "created_at",
            // [
            //     sequelize.literal(
            //         "SELECT COUNT(*) FROM votes WHERE post.id = vote.post_id"
            //     ),
            //     "vote_count",
            // ],
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    "id",
                    "comment_text",
                    "user_id",
                    "post_id",
                    "created_at",
                ],
                include: {
                    model: User,
                    attributes: ["username"],
                },
            },
            { model: User, attributes: ["username"] },
        ],
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({plain: true}))
        res.render("exercises", {posts});
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
