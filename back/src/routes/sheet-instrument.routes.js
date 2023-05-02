const express = require('express');
const router = express.Router();
const sheetInstrumentController = require("../controllers/sheet-instrument.controller");


router.post('/create', sheetInstrumentController.Create);

router.get('/', sheetInstrumentController.GetAll);

router.get('/:id', sheetInstrumentController.GetById);

router.patch('/update', sheetInstrumentController.Update);

router.delete('/delete', sheetInstrumentController.Delete);


module.exports = router;