const express = require('express');
const router = express.Router();
const statusController = require("../controllers/status.controller");


router.post('/create', statusController.Create);

router.get('/', statusController.GetAll);

router.get('/:id', statusController.GetById);

router.patch('/update', statusController.Update);

router.delete('/delete', statusController.Delete);


module.exports = router;