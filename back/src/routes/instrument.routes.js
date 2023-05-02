const express = require('express');
const router = express.Router();
const instrumentController = require("../controllers/instrument.controller");


router.post('/create', instrumentController.Create);

router.get('/', instrumentController.GetAll);

router.get('/:id', instrumentController.GetById);

router.patch('/update', instrumentController.Update);

router.delete('/delete', instrumentController.Delete);


module.exports = router;