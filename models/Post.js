const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        img_url: {
            type: DataTypes.STRING,

        },
        // difficulty:{},
        // type: {},
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'user',
            key: 'id'
        }
    },
    tags_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tags',
            key: 'id'
        }
    }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post;