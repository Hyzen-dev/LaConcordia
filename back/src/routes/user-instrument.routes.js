const express = require('express');
const router = express.Router();
const userInstrumentController = require("../controllers/user-instrument.controller");


router.post('/create', userInstrumentController.Create);

router.get('/', userInstrumentController.GetAll);

router.get('/:id', userInstrumentController.GetById);

router.patch('/update', userInstrumentController.Update);

router.delete('/delete', userInstrumentController.Delete);


module.exports = router;