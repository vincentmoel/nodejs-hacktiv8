const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../models');
const photoData = {
    title: "asd1",
    caption: "asd2",
    image_url: "as3d"
};

describe('POST /photos', () => {
    it("should send response with 201 status code", async(done) => {
        request(app)
            .post('/photos')
            .send(photoData)
            .end(function (err, res) {
                if (err) {
                    done(err)
                }
                expect(res.status).toEqual(201);
                done()
            })
    })
});

