const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class PostTags extends Model {}

PostTags.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tag_id: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: 'tags',
            //     key: 'id'
            // }
        },
        post_id: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: 'post',
            //     key: 'id'
            // }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'posttags'
    }
    )

    module.exports = PostTags;
    