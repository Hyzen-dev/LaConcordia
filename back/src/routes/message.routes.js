const express = require('express');
const router = express.Router();
const messageController = require("../controllers/message.controller");
const { authenticateUser } = require("../middlewares/authentication.middleware");
const restricted = require("../middlewares/restricted.middleware");


router.post('/create', messageController.Create);

router.get('/', messageController.GetAll);

router.get('/:id', messageController.GetById);

router.patch('/update', messageController.Update);

router.delete('/delete', messageController.Delete);

router.patch('/archive', [authenticateUser, restricted(["administrator"])], messageController.ArchiveMessage);

router.patch('/read', [authenticateUser, restricted(["administrator"])], messageController.IsReadMessage);


module.exports = router;