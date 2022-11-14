const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../models');
const photoData = {
    title: "Title Photo",
    caption: "Caption Photo",
    image_url: "URL Photo"
};

describe('POST /photos', () => {
    it("should send response with 201 status code", (done) => {
        request(app)
            .post('/photos')
            .send(photoData)
            .end(function (err, res) {
                if (err) {
                    done(err)
                }
                expect(res.status).toEqual(201);
                // expect(typeof res.body).toEqual("object");
                // expect(res.body).toHave
                done()
            })
    })
});
