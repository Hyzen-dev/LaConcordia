const express = require('express');
const router = express.Router();
const albumController = require("../controllers/album.controller");
const upload = require("../utils/multer.utils");

router.post('/create', upload.single("thumbnail"), albumController.Create);
router.post('/find', albumController.GetById);

router.get('/', albumController.GetAll);

router.get('/:id', albumController.GetById);

router.patch('/update', albumController.Update);

router.delete('/delete', albumController.Delete);


module.exports = router;