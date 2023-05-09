const express = require('express');
const router = express.Router();
const mediaController = require("../controllers/media.controller");
const upload = require("../utils/multer.utils");
const { authenticateUser } = require("../middlewares/authentication.middleware");
const restricted = require("../middlewares/restricted.middleware");

router.post('/create', [authenticateUser, restricted(["administrator", "photographer"]), upload.array('medias')], mediaController.Create);

router.get('/', mediaController.GetAll);

router.get('/:id', mediaController.GetById);

router.patch('/update', mediaController.Update);

router.delete('/delete', mediaController.Delete);


module.exports = router;