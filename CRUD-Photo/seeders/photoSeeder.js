const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Photos', [
        {
            title: "Foto1",
            caption: "Caption1",
            image_url: "url1",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: "Foto2",
            caption: "Caption2",
            image_url: "url2",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: "Foto3",
            caption: "Caption3",
            image_url: "url3",
            createdAt: new Date(),
            updatedAt: new Date()
        },
    
        ], {})
    }
}