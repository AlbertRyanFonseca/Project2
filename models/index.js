const User = require('./User');
const Post = require('./Post');
const PostTags = require('./PostTags');
const Tags = require('./Tags');
const Votes = require('./Votes');
const Comment = require('./Comment');
const Difficulty = require('./Difficulty');
const Type = require('./Type');

// create assosciations
User.hasMany(Votes, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment);

Post.hasOne(User);

Post.hasMany(Votes, {
    foreignKey: 'post_id'
});

Post.hasOne(PostTags, {
    foreignKey: 'post_id'
});

Post.hasMany(Comment, {
    foreignKey: 'comment_id'
});

Post.hasOne(Difficulty, {
    foreignKey: 'difficulty_id'
});

Post.hasOne(Type, {
    foreignKey: 'type_id'
})

Votes.hasOne(Post);

Votes.hasOne(User);

PostTags.hasMany(Post, {
    foreignKey: 'tags_id'
});

PostTags.hasMany(Tags);

Tags.hasOne(PostTags, {
    foreignKey: 'tag_id'
});


Comment.hasOne(User, {
    foreignKey: 'user_id'
});

Comment.hasOne(Post, {
    foreignKey: 'post_id'
});

Difficulty.hasMany(Post);

Type.hasMany(Post);



module.exports = {User, Post, PostTags, Tags, Votes, Comment, Difficulty, Type};
