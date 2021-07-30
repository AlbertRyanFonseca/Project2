const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        img_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "picture",
                key: "id",
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "type",
                key: "id",
            },
        },
        difficulty_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "difficulty",
                key: "id",
            },
        },
        tags_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "tags",
                key: "id",
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);

module.exports = Post;
