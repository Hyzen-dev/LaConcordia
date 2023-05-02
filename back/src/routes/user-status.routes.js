const express = require('express');
const router = express.Router();
const userStatusController = require("../controllers/user-status.controller");


router.post('/create', userStatusController.Create);

router.get('/', userStatusController.GetAll);

router.get('/:id', userStatusController.GetById);

router.patch('/update', userStatusController.Update);

router.delete('/delete', userStatusController.Delete);


module.exports = router;