const seedUsers = require("./user-seeds");
const seedTags = require("./tag-seeds");
const seedDifficulty = require("./difficulty-seeds");
const seedType = require("./type-seeds");
const seedPicture = require("./picture-seeds");
const seedPosts = require("./post-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("=============");
    await seedUsers();
    console.log("=============");
    await seedTags();
    console.log("=============");
    await seedDifficulty();
    console.log("=============");
    await seedType();
    console.log("=============");
    await seedPicture();
    console.log("=============");
    await seedPosts();
    console.log("=============");
    process.exit(0);
};

seedAll();
