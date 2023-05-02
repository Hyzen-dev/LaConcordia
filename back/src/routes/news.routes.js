const express = require('express');
const router = express.Router();
const newsController = require("../controllers/news.controller");


router.post('/create', newsController.Create);

router.get('/', newsController.GetAll);

router.get('/:id', newsController.GetById);

router.patch('/update', newsController.Update);

router.delete('/delete', newsController.Delete);


module.exports = router;