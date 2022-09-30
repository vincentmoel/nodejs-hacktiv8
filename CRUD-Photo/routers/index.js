const router = require('express').Router();

const PhotoController = require('../controllers/photoController');

router.get('/photos',PhotoController.getAllPhotos);
router.get('/photos/:id',PhotoController.getOnePhotoById);
router.post('/photos',PhotoController.createPhoto);
router.put('/photos/:id',PhotoController.updateOnePhotoById);
router.delete('/photos/:id',PhotoController.deleteOnePhotoById);

module.exports = router;