const express = require('express');
const router = express.Router();
const mediaController = require("../controllers/media.controller");


router.post('/create', mediaController.Create);

router.get('/', mediaController.GetAll);

router.get('/:id', mediaController.GetById);

router.patch('/update', mediaController.Update);

router.delete('/delete', mediaController.Delete);


module.exports = router;