const express = require('express');
const router = express.Router();
const messageController = require("../controllers/message.controller");


router.post('/create', messageController.Create);

router.get('/', messageController.GetAll);

router.get('/:id', messageController.GetById);

router.patch('/update', messageController.Update);

router.delete('/delete', messageController.Delete);


module.exports = router;