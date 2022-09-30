const { Photo } = require('../models');


class PhotoController {
    static getAllPhotos(req,res) {
        Photo.findAll()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    static getOnePhotoById(req,res) {

        let id = +req.params.id;

        Photo.findByPk(id)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createPhoto(req,res) {
        const { title, caption, image_url } = req.body;

        Photo.create({
            title,caption,image_url
        })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
    
    static updateOnePhotoById(req,res) {
        let id = +req.params.id;
        
        const {title,caption,image_url} = req.body;
        
        let data = {
            title,
            caption,
            image_url
        }

        Photo.update(
            data,
            {
                where:{
                    id
                },
                returning:true
            }
        )
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static deleteOnePhotoById(req,res) {
        let id = +req.params.id;
        
        Photo.destroy({
            where:{
                id
            }
        })
            .then(result => {
                res.status(200).json(result);

            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

}

module.exports = PhotoController;