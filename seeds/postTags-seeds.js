const { PostTags } = require("../models");

const postTagData = [
    {
        tag_id: 1,
        post_id: 3
    },
    {
        tag_id: 1,
        post_id: 2
    },
    {
        tag_id: 2,
        post_id: 3
    },
    {
        tag_id: 2,
        post_id: 1
    },
    {
        tag_id: 3,
        post_id: 3
    },
    {
        tag_id: 4,
        post_id: 1
    },
    {
        tag_id: 4,
        post_id: 2
    },
    
    
];

const seedPostTags =()=> PostTags.bulkCreate(postTagData);

module.exports = seedPostTags;