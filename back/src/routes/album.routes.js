const express = require('express');
const router = express.Router();
const albumController = require("../controllers/album.controller");


router.post('/create', albumController.Create);

router.get('/', albumController.GetAll);

router.get('/:id', albumController.GetById);

router.patch('/update', albumController.Update);

router.delete('/delete', albumController.Delete);


module.exports = router;