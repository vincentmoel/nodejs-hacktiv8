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
                expect(typeof res.body).toEqual("object");
                expect(res.body).toHaveProperty("title");
                expect(res.body).toHaveProperty("caption");
                expect(res.body).toHaveProperty("image_url");
                expect(typeof res.body.title).toEqual("string");
                expect(typeof res.body.caption).toEqual("string");
                expect(typeof res.body.image_url).toEqual("string");

                done();
            })
    })

});

describe('GET /photos', () => {
    it("should send response with 200 status code", (done) => {
        request(app)
            .get('/photos')
            .end(function (err, res) {
                if (err) {
                    done(err)
                }
                expect(res.status).toEqual(200);
                expect(typeof res.body).toEqual("object");
                
                done();
            })
    })

});



describe('GET /photos/1', () => {
    it("should send response with 200 status code", (done) => {
        request(app)
            .get('/photos')
            .end(function (err, res) {
                if (err) {
                    done(err)
                }
                expect(res.status).toEqual(200);
                expect(typeof res.body).toEqual("object");
                
                done();
            })
    })

});