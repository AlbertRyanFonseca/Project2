const { Picture } = require("../models");

const pictureData = [
    {
        image_url: "/images/JPEG/cardio_1.jpg",
    },
    {
        image_url: "/images/JPEG/core_1.jpg",
    },
    {
        image_url: "/images/JPEG/crossfit_1.jpg",
    },
    {
        image_url: "/images/JPEG/strength_1.jpg",
    },
];

const seedPicture =()=> Picture.bulkCreate(pictureData);

module.exports = seedPicture;
