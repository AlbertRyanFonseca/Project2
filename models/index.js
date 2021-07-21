const User = require('./User');
const Post = require('./Post');
const PostTags = require('./PostTags');
const Tags = require('./Tags');
const Votes = require('./Votes');

// create assosciations
User.hasMany(Votes, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.hasOne(User);

Post.hasMany(Votes, {
    foreignKey: 'post_id'
});

Post.hasOne(PostTags, {
    foreignKey: 'post_id'
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










module.exports = {User, Post, PostTags, Tags, Votes};
