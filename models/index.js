const User = require('./User');
const Post = require('./Post');
const PostTags = require('./PostTags');
const Tags = require('./Tags');
const Votes = require('./Votes');
const Comment = require('./Comment');

// create assosciations
User.hasMany(Votes, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});


User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// possibly has one?
Post.belongsTo(User, {
    foreignKey: 'user_id'
});



Post.hasMany(Votes, {
    foreignKey: 'post_id'
});

Post.belongsToMany(Tags, {
    through: PostTags,
    foreignKey: 'post_id'
});


Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

Votes.belongsTo(Post, {
    foreignKey:'post_id'
});

Votes.belongsTo(User, {
    foreignKey: 'vote_id'
});

Tags.belongsToMany(Post, {
    through: PostTags,
    foreignKey: 'tag_id'
});



Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'comment_id'
});



module.exports = {User, Post, PostTags, Tags, Votes, Comment};
