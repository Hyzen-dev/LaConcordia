const express = require('express');
const router = express.Router();
const sheetController = require("../controllers/sheet.controller");


router.post('/create', sheetController.Create);

router.get('/', sheetController.GetAll);

router.get('/:id', sheetController.GetById);

router.patch('/update', sheetController.Update);

router.delete('/delete', sheetController.Delete);


module.exports = router;