const express = require('express');
const router = express.Router();
const roleController = require("../controllers/role.controller");


router.post('/create', roleController.Create);

router.get('/', roleController.GetAll);

router.get('/:id', roleController.GetById);

router.patch('/update', roleController.Update);

router.delete('/delete', roleController.Delete);


module.exports = router;